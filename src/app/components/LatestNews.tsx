"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface NewsItem {
    id: string;
    title_ru: string;
    title_en: string;
    slug?: string;
    date: string;
    coverImageUrl?: string;
}

interface LatestNewsProps {
    news: NewsItem[];
    language: "ru" | "en";
}

export default function LatestNews({ news, language }: LatestNewsProps) {
    const router = useRouter();  // Переносим сюда вызов useRouter
    const { t } = useTranslation();

    return (
        <div className="max-w-[1350px] mx-auto mt-12  p-4 ">
            {/* Заголовок новостей */}
            <h2 className="text-2xl font-bold rounded-2xl inline-block px-4 py-2 border-dashed border-2 border-orange mb-10">
                {language === "ru" ? "Новости" : "News"}
            </h2>
            <div className="mx-auto ">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Link
                            href={`/news/${item.slug}`}
                            key={item.id}
                            className="group border bg-white border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                        >
                            {item.coverImageUrl ? (
                                <img
                                    src={item.coverImageUrl}
                                    alt={language === "ru" ? item.title_ru : item.title_en}
                                    className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-all duration-300"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-300 rounded-t-lg flex items-center justify-center">
                                    <span
                                        className="text-gray-500">{language === "ru" ? "Нет изображения" : "No image"}</span>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mt-4 group-hover:text-orange-500 transition-all duration-300">
                                {language === "ru" ? item.title_ru : item.title_en}
                            </h3>
                            <p className="text-gray-600 text-sm">{new Date(item.date).toLocaleDateString()}</p>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <button
                        className="bg-midGray text-white lg:text-lg border-2 border-transparent hover:bg-transparent hover:border-orange hover:text-orange px-6 py-3 rounded-2xl text-sm lg:text-base transition-all duration-300 ease-in-out"
                        onClick={() => router.push("/news")}
                    >
                        {t("Все новости")}
                    </button>
                </div>
            </div>
        </div>
    );
}
