"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X as Close } from "lucide-react";
import { client } from "@/sanity/lib/client";

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("all");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 3; // Количество результатов на странице
    const router = useRouter();

    const handleSearch = async () => {
        if (!searchTerm) return;

        try {
            const query = `
  *[
    ($category == "all" && 
      (
        (_type == "news" && (title_ru match $term || title_en match $term || description match $term || description_en match $term)) ||
        (_type == "exhibition" && (title match $term || description match $term || description_en match $term))
      )
    ) || 
    ($category == "news" && _type == "news" && 
      (title_ru match $term || title_en match $term || description match $term || description_en match $term)
    ) ||
    ($category == "events" && _type == "exhibition" && 
      (title match $term || description match $term || description_en match $term)
    )
  ] {
    _id,
    "title": select(
      _type == "news" => coalesce(title_ru, title_en),
      _type == "exhibition" => title
    ),
    description,
    _type,
    "link": select(
      _type == "news" => "/news/" + slug.current,
      _type == "exhibition" => "/exhibition/" + _id
    )
  }
`;

            const params = { term: `${searchTerm}*`, category: searchCategory };
            const results = await client.fetch(query, params);
            setSearchResults(results);
            setCurrentPage(1); // Сброс на первую страницу при новом поиске
        } catch (error) {
            console.error("Ошибка поиска в Sanity:", error);
            setSearchResults([]);
        }
    };

    const handleReset = () => {
        setSearchTerm("");
        setSearchCategory("all");
        setSearchResults([]);
        setCurrentPage(1);
    };

    const handleResultClick = (link: string) => {
        router.push(link);
        onClose();
    };

    const paginatedResults = searchResults.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    const totalPages = Math.ceil(searchResults.length / resultsPerPage);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-6 relative mx-4 sm:mx-auto sm:p-8">
                <button
                    className="absolute top-4 right-4 text-gray hover:text-black"
                    onClick={onClose}
                >
                    <Close size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-6 text-black text-center">Поиск</h2>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Введите запрос..."
                        className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange text-black placeholder-gray"
                    />
                    <select
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange text-black"
                    >
                        <option value="all">Везде</option>
                        <option value="events">Мероприятия</option>
                        <option value="news">Новости</option>
                    </select>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleSearch}
                            className="bg-orange text-white rounded-lg px-6 py-2 hover:text-black transition-all font-medium"
                        >
                            Найти
                        </button>
                        <button
                            onClick={handleReset}
                            className="bg-black text-white rounded-lg px-6 py-2 hover:bg-gray/80 transition-all font-medium"
                        >
                            Сброс
                        </button>
                    </div>
                </div>

                {/* Отображение результатов поиска */}
                <div className="mt-6">
                    {searchResults.length > 0 ? (
                        <>
                            <ul className="gap-4">
                                {paginatedResults.map((result) => (
                                    <li
                                        key={result._id}
                                        className="border border-black rounded-lg p-4 hover:bg-gray/20 mt-3 cursor-pointer transition"
                                        onClick={() => handleResultClick(result.link)}
                                    >
                                        <h3 className="font-semibold text-lg text-black">{result.title}</h3>
                                        <p className="text-black">{result.description}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 border-2 border-orange text-orange rounded-xl hover:bg-orange hover:text-white transition disabled:opacity-50"
                                >
                                    Назад
                                </button>
                                <span className="text-black">
                                    Страница {currentPage} из {totalPages}
                                </span>
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 border-2 border-orange text-orange rounded-xl hover:bg-orange hover:text-white transition disabled:opacity-50"
                                >
                                    Вперед
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-black text-center">Нет результатов</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
