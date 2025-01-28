"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { FiFileText } from "react-icons/fi"; // Импорт новой иконки
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/app/components/ui/pagination";

interface NewsItem {
    title_ru: string;
    title_en: string;
    slug?: string;
    date: string;
    coverImageUrl?: string;
}

interface NewsPageContentProps {
    news: NewsItem[];
    language: "ru" | "en";
}

export default function NewsPageContent({ news, language }: NewsPageContentProps) {
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const newsPerPage = 6;

    const handleDateSelect = (date: Date | null) => {
        setSelectedDate(date);
        setCalendarOpen(false);
    };

    const handleCalendarClose = () => {
        setCalendarOpen(false);
    };

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedDate(null);
    };

    const filteredNews = news
        .filter((item) => {
            const title = language === "ru" ? item.title_ru : item.title_en;
            const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDate = selectedDate
                ? new Date(item.date).toDateString() === selectedDate.toDateString()
                : true;

            return matchesSearch && matchesDate;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

    return (
        <div className="max-w-[1350px] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-start  mb-6 md:mb-12 mt-16 relative">
                <div className="flex items-center">
                    <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center">
                        {t("Новости")}
                        <FiFileText className="w-10 h-10 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white ml-3"/>
                    </h1>
                </div>
                <div className="flex items-center mt-2 ml-4 md:mt-0">
                    <p className="text-black text-sm md:text-base text-center md:text-left leading-tight max-w-full md:max-w-[300px]">
                        {t("Воспользуйтесь фильтром ниже, чтобы найти интересующие вас новости.")}
                    </p>
                </div>
            </div>

            <div className="bg-lightGray p-4 md:p-6 rounded-3xl shadow-xl mb-16">
                <div className="flex flex-wrap justify-between text-center gap-4">
                    <div className="flex flex-col w-full lg:w-1/3">
                        <label className="text-midGray font-semibold mb-2">{t("Поиск")}</label>
                        <input
                            type="text"
                            placeholder={t("Введите текст")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-4 py-3 bg-midGray text-white rounded-2xl border border-white focus:outline-none focus:ring-4 focus:ring-white appearance-none"
                        />
                    </div>
                    <div className="relative flex flex-col w-full lg:w-1/3">
                        <label className="text-midGray font-semibold mb-2">{t("Выберите дату")}</label>
                        <button
                            onClick={toggleCalendar}
                            className="px-4 py-3 bg-midGray text-left text-white rounded-2xl border border-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-white appearance-none"
                        >
                            {selectedDate ? selectedDate.toLocaleDateString() : t("Выберите дату")}
                        </button>
                        {isCalendarOpen && (
                            <div className="absolute top-full mt-2 z-50">
                                <Calendar
                                    selectedDate={selectedDate}
                                    onSelect={handleDateSelect}
                                    onClose={handleCalendarClose}
                                    className="border rounded-lg shadow-md text-sm"
                                />
                            </div>
                        )}
                    </div>
                    <div className="w-full lg:w-1/5 mt-4 md:mt-0"> {/* Отступ сверху только на мобильных */}
                        <button
                            onClick={clearFilters}
                            className="w-full px-6 py-6 bg-white text-darkGray border-2 border-midGray rounded-3xl hover:bg-midGray hover:text-white transition-all duration-300 ease-in-out"
                        >
                            {t("Очистить фильтры")}
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentNews.length > 0 ? (
                    currentNews.map((item, index) => (
                        <Link href={`/news/${item.slug}`} key={item.slug || `news-item-${index}`}>
                            <div
                                data-aos="fade-up"
                                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow h-[22rem] flex flex-col"
                            >
                                {item.coverImageUrl ? (
                                    <img
                                        src={item.coverImageUrl}
                                        alt={language === "ru" ? item.title_ru : item.title_en}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-48 bg-gray-300 rounded-t-lg flex items-center justify-center">
                                        <span className="text-gray-500">{t("Нет изображения")}</span>
                                    </div>
                                )}
                                <h2 className="text-xl font-bold mt-4 line-clamp-2">
                                    {language === "ru" ? item.title_ru : item.title_en}
                                </h2>
                                <p className="text-gray-600 mt-auto">
                                    {new Date(item.date).toLocaleDateString()}
                                </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-600">{t("Новости не найдены")}</p>
                )}
            </div>

            {filteredNews.length > newsPerPage && (
                <div className="flex justify-center mt-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                />
                            </PaginationItem>
                            {Array.from(
                                {length: Math.ceil(filteredNews.length / newsPerPage)},
                                (_, index) => index + 1
                            ).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        isActive={currentPage === page}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() =>
                                        setCurrentPage(
                                            Math.min(
                                                currentPage + 1,
                                                Math.ceil(filteredNews.length / newsPerPage)
                                            )
                                        )
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
