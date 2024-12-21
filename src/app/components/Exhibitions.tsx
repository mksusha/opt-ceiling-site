"use client";

import React, { useEffect, useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { client } from '@/sanity/lib/client';
import ExhibitionCard from "@/app/components/ExhibitionCard";

interface ImageFormats {
    thumbnail?: { url: string };
    small?: { url: string };
}

export interface Exhibition {
    id: string; // Используем _id как id
    title: string; // Заголовок
    description: string; // Описание
    startDate: string; // Начало
    endDate: string; // Конец
    isCurrent: boolean; // Активность
    organizer: string; // Организатор
    eventType: string; // Тип события
    image?: string; // Ссылка на изображение
}




const Exhibitions = forwardRef<HTMLDivElement>((_, ref) => {
    const { i18n, t } = useTranslation();
    const [currentExhibitions, setCurrentExhibitions] = useState<Exhibition[]>([]);
    const [upcomingExhibitions, setUpcomingExhibitions] = useState<Exhibition[]>([]);
    const [visibleExhibitions, setVisibleExhibitions] = useState<number>(3);

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
            isCurrent,
            organizer,
            organizer_en,
            eventType,
            eventType_en,
            "image": image.asset->url
        }
    `;
            // Запрос данных
            const data = await client.fetch(query);

            // Логирование данных для отладки
            console.log('Fetched data:', data);

            // Дальнейшая обработка данных
            const now = new Date();

            const exhibitions = data.map((item: any) => ({
                id: item._id,
                title: locale === "en" ? item.title_en : item.title,
                description: locale === "en" ? item.description_en : item.description,
                startDate: item.startDate,
                endDate: item.endDate,
                isCurrent: item.isCurrent,
                organizer: locale === "en" ? item.organizer_en : item.organizer,
                eventType: locale === "en" ? item.eventType_en : item.eventType,
                image: item.image || undefined,
            }));

            const current = exhibitions.filter(
                (exhibition: Exhibition) =>
                    exhibition.isCurrent ||
                    (new Date(exhibition.startDate) <= now && new Date(exhibition.endDate) >= now)
            );

            const upcoming = exhibitions.filter(
                (exhibition: Exhibition) => new Date(exhibition.startDate) > now
            );

            setCurrentExhibitions(current);
            setUpcomingExhibitions(upcoming);

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
        AOS.refresh(); // Обновление AOS после изменения данных
    }, [currentExhibitions, upcomingExhibitions]);

    const handleShowMore = () => {
        setVisibleExhibitions((prev) => prev + 3);
        AOS.refresh(); // Обновляем AOS после изменения числа видимых элементов
    };

    return (
        <div ref={ref} className="container max-w-[1350px] mx-auto p-4">
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold rounded-2xl inline-block px-4 py-2 border-dashed border-2 border-orange mb-10">
                    {t("Текущие выставки и мероприятия")} ({currentExhibitions.length})
                </h2>

                {currentExhibitions.length > 0 ? (
                    <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentExhibitions.map((item: Exhibition) => (
                            <ExhibitionCard key={item.id} exhibition={item} />
                        ))}

                    </div>
                ) : (
                    <p className="text-gray-600">{t("Нет текущих выставок.")}</p>
                )}
            </div>
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-14 rounded-2xl inline-block px-4 py-2 border-dashed border-2 border-orange">
                    {t("Ближайшие выставки и мероприятия")} ({upcomingExhibitions.length})
                </h2>

                {upcomingExhibitions.length > 0 ? (
                    <div className="flex flex-col space-y-7">
                        {upcomingExhibitions.slice(0, visibleExhibitions).map((item: Exhibition) => (
                            <ExhibitionCard key={item.id} exhibition={item} />
                        ))}

                    </div>
                ) : (
                    <p className="text-gray-600">{t("Нет ближайших выставок.")}</p>
                )}

                {upcomingExhibitions.length > visibleExhibitions && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleShowMore}
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
