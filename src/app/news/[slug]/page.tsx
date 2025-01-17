"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { useTranslation } from "react-i18next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientWrapper from "@/app/components/ClientWrapper";
import MySliderForNews from "@/app/components/MySliderForNews";

interface NewsItem {
    title_ru: string;
    title_en: string;
    text_ru: string;
    text_en: string;
    date: string;
    coverImageUrl: string;
    gallery: {
        asset: {
            url: string;
        };
    }[];
}

const NewsDetails: React.FC = () => {
    const { slug } = useParams(); // Получаем [slug] из URL
    const { i18n, t } = useTranslation();
    const router = useRouter();
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

    useEffect(() => {
        const fetchNewsItem = async () => {
            try {
                const query = `
                *[_type == "news" && slug.current == $slug][0] {
                    title_ru,
                    title_en,
                    text_ru,
                    text_en,
                    date,
                    "coverImageUrl": cover_image.asset->url,
                    gallery[]{
                        asset->{
                            url
                        }
                    }
                }
                `;
                const data = await client.fetch(query, { slug });

                setNewsItem(data || null);
            } catch (error) {
                console.error("Ошибка при загрузке новости:", error);
            }
        };

        fetchNewsItem();
    }, [slug]);

    if (!newsItem) {
        return null;
    }


    const isEnglish = i18n.language === "en";

    return (
        <ClientWrapper>
            <Header />
            <main className="container max-w-[1350px] mx-auto p-4">
                {/* Заголовок */}
                <h1 className="text-3xl font-bold mt-10 mb-4">
                    {isEnglish ? newsItem.title_en : newsItem.title_ru}
                </h1>

                {/* Дата */}
                <p className="text-gray-500 mb-6">
                    {new Date(newsItem.date).toLocaleDateString()}
                </p>

                {/* Слайдер с изображениями */}
                {newsItem.coverImageUrl && (
                    <MySliderForNews
                        coverImageUrl={newsItem.coverImageUrl}
                        gallery={newsItem.gallery || []}
                    />
                )}

                {/* Текст новости */}
                <p className="text-lg leading-7 mt-8 mb-10">
                    {isEnglish ? newsItem.text_en : newsItem.text_ru}
                </p>

                {/* Кнопка "Все новости" */}
                <div className="flex justify-center">
                    <button
                        className="bg-orange text-white lg:text-lg border-2 border-transparent hover:bg-transparent hover:border-orange hover:text-orange px-6 py-3 rounded-2xl text-sm lg:text-base transition-all duration-300 ease-in-out"
                        onClick={() => router.push("/news")}
                    >
                        {t("Все новости")}
                    </button>
                </div>
            </main>
            <Footer />
        </ClientWrapper>
    );
};

export default NewsDetails;
