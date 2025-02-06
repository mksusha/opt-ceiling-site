"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useTranslation } from "react-i18next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientWrapper from "@/app/components/ClientWrapper";
import { PortableText } from "@portabletext/react"; // Импортируем обработчик блок-контента

interface AboutPage {
    title_ru: string;
    title_en: string;
    content_ru: any[]; // Так как это массив блоков, указываем `any[]`
    content_en: any[];
}

const About: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [aboutPage, setAboutPage] = useState<AboutPage | null>(null);

    useEffect(() => {
        const fetchAboutPage = async () => {
            try {
                const query = `
                *[_type == "aboutPage"][0] {
                    title_ru,
                    title_en,
                    content_ru,
                    content_en
                }
                `;
                const data = await client.fetch(query);

                setAboutPage(data || null);
            } catch (error) {
                console.error("Ошибка при загрузке данных о компании:", error);
            }
        };

        fetchAboutPage();
    }, []);

    if (!aboutPage) {
        return null; // Если данные ещё не загружены, ничего не отображаем
    }

    const isEnglish = i18n.language === "en";

    return (
        <ClientWrapper>
            <Header />
            <main className="container max-w-[1350px] mx-auto px-4">
                {/* Заголовок */}
                <div className="lg:text-left text-center">
                    <h1 className="text-3xl sm:text-2xl mb-6 md:mb-10 mt-16 lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange">
                        {isEnglish ? aboutPage.title_en : aboutPage.title_ru}
                    </h1>
                </div>

                {/* Контент */}
                <div className="mb-14 space-y-6 lg:space-y-4 text-center lg:text-left text-lg lg:text-xl text-gray-700 leading-relaxed">
                    <PortableText value={isEnglish ? aboutPage.content_en : aboutPage.content_ru} />
                </div>
            </main>
            <Footer />
        </ClientWrapper>
    );
};

export default About;
