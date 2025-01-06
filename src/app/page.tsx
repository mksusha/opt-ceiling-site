"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import StatsSection from "@/app/components/StatsSection";
import Exhibitions from "@/app/components/Exhibitions";
import { useTranslation } from "react-i18next";
import ClientWrapper from "@/app/components/ClientWrapper";
import "./i18n";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "@/app/components/Footer";
import LatestNews from "@/app/components/LatestNews";
import { client } from "@/sanity/lib/client";

export default function Home() {
    const { i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const exhibitionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Инициализация AOS для анимаций
        AOS.init({
            duration: 1300,
            easing: "ease-in-out",
            offset: 100,    // Расстояние до появления анимации
            once: true,
        });

        const fetchNews = async () => {
            try {
                const query = `
                    *[_type == "news"] | order(date desc) [0...3] {
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
    }, [i18n.language]);  // Загрузка новостей при изменении языка

    const handleNavigateToExhibitions = () => {
        exhibitionsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ClientWrapper>
            <Header />
            <StatsSection onNavigateToExhibitions={handleNavigateToExhibitions} />
            <div ref={exhibitionsRef} className="scroll-offset">
                <Exhibitions />
            </div>
            {/* Отображаем новости только после их загрузки */}
            {news.length > 0 ? (
                <LatestNews news={news} language={i18n.language as "ru" | "en"} />
            ) : (
                <div className="text-center py-4">Загрузка новостей...</div>
            )}
            <Footer />
        </ClientWrapper>
    );
}
