"use client";

import React, { useEffect, useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { client } from '@/sanity/lib/client';
import ExhibitionCard from "@/app/components/ExhibitionCard";

export interface Exhibition {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    organizer: string;
    eventType: string;
    image?: string;
}

const Exhibitions = forwardRef<HTMLDivElement>((_, ref) => {
    const { i18n, t } = useTranslation();
    const [activeExhibitions, setActiveExhibitions] = useState<Exhibition[]>([]);
    const [pastExhibitions, setPastExhibitions] = useState<Exhibition[]>([]);
    const [visiblePastExhibitions, setVisiblePastExhibitions] = useState<number>(3);

    const fetchExhibitions = async (locale: string): Promise<void> => {
        try {
            const query = `
            *[_type == "exhibition"]{
                _id,
                title,
                title_en,
                description,
                description_en,
                startDate,
                endDate,
                organizer,
                organizer_en,
                eventType,
                eventType_en,
                "image": image.asset->url
            }
            `;
            const data = await client.fetch(query);

            const now = new Date();

            const exhibitions = data.map((item: any) => ({
                id: item._id,
                title: locale === "en" ? item.title_en : item.title,
                description: locale === "en" ? item.description_en : item.description,
                startDate: item.startDate,
                endDate: item.endDate,
                organizer: locale === "en" ? item.organizer_en : item.organizer,
                eventType: locale === "en"
                    ? item.eventType_en
                    : (item.eventType || item.eventType_en),

                image: item.image || undefined,
            }));


            // Фильтруем актуальные (текущие + будущие) и прошедшие выставки
            const active = exhibitions.filter(
                (exhibition: Exhibition) => new Date(exhibition.endDate) >= now
            );

            const past = exhibitions.filter(
                (exhibition: Exhibition) => new Date(exhibition.endDate) < now
            );

            setActiveExhibitions(active);
            setPastExhibitions(past);

            // Обновляем AOS
            AOS.refresh();
        } catch (error) {
            console.error("Ошибка при загрузке данных:", (error as Error).message);
        }
    };

    useEffect(() => {
        fetchExhibitions(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        AOS.refresh();
    }, [activeExhibitions, pastExhibitions]);

    const handleShowMorePast = () => {
        setVisiblePastExhibitions((prev) => prev + 3);
        AOS.refresh();
    };

    return (
        <div ref={ref} className="container max-w-[1350px] mx-auto p-4">
            {/* Актуальные выставки */}
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold rounded-2xl inline-block px-4 py-2 border-dashed border-2 border-orange mb-10">
                    {t("Актуальные выставки и мероприятия")} ({activeExhibitions.length})
                </h2>

                {activeExhibitions.length > 0 ? (
                    <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeExhibitions.map((item: Exhibition) => (
                            <ExhibitionCard key={item.id} exhibition={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">{t("Нет актуальных выставок.")}</p>
                )}
            </div>

            {/* Прошедшие выставки */}
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-14 rounded-2xl inline-block px-4 py-2 border-dashed border-2 border-orange">
                    {t("Прошедшие выставки и мероприятия")} ({pastExhibitions.length})
                </h2>

                {pastExhibitions.length > 0 ? (
                    <div className="flex flex-col space-y-7">
                        {pastExhibitions
                            .slice(0, visiblePastExhibitions)
                            .map((item: Exhibition) => (
                                <ExhibitionCard key={item.id} exhibition={item} />
                            ))}
                    </div>
                ) : (
                    <p className="text-gray-600">{t("Нет прошедших выставок.")}</p>
                )}

                {pastExhibitions.length > visiblePastExhibitions && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleShowMorePast}
                            className="w-[100%] sm:w-auto bg-darkGray text-white text-lg sm:text-lg sm:font-normal hover:text-orange hover:bg-white border-2 border-darkGray hover:border-orange px-4 sm:px-14 py-2 sm:py-3 rounded-2xl transition-all duration-300 ease-in-out"
                        >
                            {t("Показать ещё")}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});

export default Exhibitions;
