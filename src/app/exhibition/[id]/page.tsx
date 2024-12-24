"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { useTranslation } from "react-i18next";
import Header from "@/app/components/Header"; // Импортируем хедер
import ExhibitionDetails from "@/app/components/ExhibitionDetails"; // Импортируем компонент дизайна
import ClientWrapper from "@/app/components/ClientWrapper";


interface Exhibition {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    organizer: string;
    eventType: string;
    image?: string;
}

const ExhibitionPage: React.FC = () => {
    const { id } = useParams(); // Получение параметра id из URL
    const { t, i18n } = useTranslation(); // Подключение i18n для переводов
    const [exhibition, setExhibition] = useState<Exhibition | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExhibition = async () => {
            try {
                const query = `
                    *[_type == "exhibition" && _id == $id][0] {
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
                const data = await client.fetch(query, { id });

                if (data) {
                    const isEnglish = i18n.language === "en";
                    setExhibition({
                        id: data._id,
                        title: isEnglish ? data.title_en || t("Без названия") : data.title || t("Без названия"),
                        description: isEnglish
                            ? data.description_en || t("Описание отсутствует.")
                            : data.description || t("Описание отсутствует."),
                        startDate: data.startDate,
                        endDate: data.endDate,
                        organizer: isEnglish
                            ? data.organizer_en || t("Неизвестный организатор")
                            : data.organizer || t("Неизвестный организатор"),
                        eventType: isEnglish
                            ? data.eventType_en || t("Тип не указан")
                            : data.eventType || t("Тип не указан"),
                        image: data.image || "/default-placeholder.png",
                    });
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных выставки:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchExhibition();
        }
    }, [id, t, i18n.language]);

    if (loading) {
        return <p className="text-center text-lg">{t("Загрузка...")}</p>;
    }

    if (!exhibition) {
        return <p className="text-center text-lg text-red-500">{t("Выставка не найдена.")}</p>;
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    return (
        <ClientWrapper>
        <div className="bg-gray-100 min-h-screen">
            {/* Хедер */}
            <Header />

            {/* Контент страницы */}
            <ExhibitionDetails
                exhibition={exhibition}
                formatDate={formatDate}
                t={t}
            />
        </div>
        </ClientWrapper>
    );
};

export default ExhibitionPage;
