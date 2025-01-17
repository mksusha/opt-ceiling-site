"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Для навигации
import { X as Close } from "lucide-react";
import { client } from "@/sanity/lib/client";

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("all");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Количество элементов на страницу
    const router = useRouter(); // Навигация

    const handleSearch = async () => {
        if (!searchTerm) return;

        try {
            const query = `
          *[
            (_type == "news" && $category in ["all", "news"] && title match $term) || 
            (_type == "exhibition" && $category in ["all", "events"] && title match $term)
          ] {
            _id,
            title,
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
        router.push(link); // Переход по ссылке
        onClose(); // Закрытие модального окна
    };

    const paginatedResults = searchResults.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(searchResults.length / itemsPerPage);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-lg p-8 relative">
                <button
                    className="absolute top-4 right-4 text-gray hover:text-black"
                    onClick={onClose}
                >
                    <Close size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-6 text-gray">Поиск</h2>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Введите запрос..."
                        className="border border-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue text-black placeholder-gray"
                    />
                    <select
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        className="border border-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue text-black"
                    >
                        <option value="all">Везде</option>
                        <option value="events">Мероприятия</option>
                        <option value="news">Новости</option>
                    </select>
                    <div className="flex gap-4">
                        <button
                            onClick={handleSearch}
                            className="bg-blue text-white rounded-lg px-6 py-2 hover:bg-blue/80 transition-all font-medium"
                        >
                            Найти
                        </button>
                        <button
                            onClick={handleReset}
                            className="bg-gray text-white rounded-lg px-6 py-2 hover:bg-gray/80 transition-all font-medium"
                        >
                            Сброс
                        </button>
                    </div>
                </div>

                {/* Отображение результатов поиска */}
                <div className="mt-6">
                    {paginatedResults.length > 0 ? (
                        <ul className="gap-4">
                            {paginatedResults.map((result) => (
                                <li
                                    key={result._id}
                                    className="border border-gray rounded-lg p-4 hover:bg-gray/20 cursor-pointer transition"
                                    onClick={() => handleResultClick(result.link)}
                                >
                                    <h3 className="font-semibold text-lg text-black">{result.title}</h3>
                                    <p className="text-gray">{result.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray">Нет результатов</p>
                    )}

                    {/* Пагинация */}
                    {searchResults.length > itemsPerPage && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray text-white rounded-lg disabled:opacity-50"
                            >
                                Назад
                            </button>
                            <span className="mx-4 text-black">
                                Страница {currentPage} из {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-gray text-white rounded-lg disabled:opacity-50"
                            >
                                Вперед
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
