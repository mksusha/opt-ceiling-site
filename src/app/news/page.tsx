"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { client } from "@/sanity/lib/client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientWrapper from "@/app/components/ClientWrapper";
import NewsPageContent from "@/app/components/NewsPageContent";

const NewsPage: React.FC = () => {
    const { i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [language, setLanguage] = useState<"ru" | "en">("ru");

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const query = `
  *[_type == "news"] {
    _id,
    title_ru,
    title_en,
    slug,
    date,
    "coverImageUrl": cover_image.asset->url
  }
`;

                const data = await client.fetch(query);

                const mappedNews = data.map((item: any) => ({
                    id: item._id,
                    title_ru: item.title_ru,
                    title_en: item.title_en,
                    slug: item.slug?.current,
                    date: item.date,
                    coverImageUrl: item.coverImageUrl || "/default-placeholder.png",
                }));

                setNews(mappedNews);
            } catch (error) {
                console.error("Ошибка при загрузке новостей:", error);
            }
        };

        fetchNews();
    }, [i18n.language]);

    return (
        <ClientWrapper>
            <Header />
            <NewsPageContent news={news} language={i18n.language as "ru" | "en"} />
            <Footer />
        </ClientWrapper>
    );
};

export default NewsPage;
