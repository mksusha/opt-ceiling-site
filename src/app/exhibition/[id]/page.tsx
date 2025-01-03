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
    title_en?: string;
    description?: string;
    description_en?: string;
    startDate: string;
    endDate?: string;
    time?: string;
    time_en?: string;
    organizer?: string;
    organizer_en?: string;
    organizer2?: string;
    organizer2_en?: string;
    partner?: string;
    partner_en?: string;
    phoneNumber?: string;
    website?: string;
    eventType: string;
    location?: string;
    location_en?: string;
    mapCode?: string;
    invitationLink?: string;
    recording?: string;
    video?: string;
    slider?: { _type: "image"; asset: { _ref: string } }[];
    redirectButton?: string;
    theme?: string[];
    theme_en?: string[];
    banner?: { asset: { _ref: string } };
    image?: { asset: { _ref: string } };
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
        time,
        time_en,
        organizer,
        organizer_en,
        organizer2,
        organizer2_en,
        partner,
        partner_en,
        phoneNumber,
        website,
        eventType,
        location,
        location_en,
        mapCode,
        invitationLink,
        recording,
        video,
        "photos": slider[].asset->url,
        redirectButton,
        theme,
        theme_en,
        "banner": banner.asset->url,
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
                        time: data.time,
                        time_en: data.time_en,
                        organizer: isEnglish
                            ? data.organizer_en || t("Неизвестный организатор")
                            : data.organizer || t("Неизвестный организатор"),
                        organizer2: isEnglish ? data.organizer2_en : data.organizer2,
                        partner: isEnglish ? data.partner_en : data.partner,
                        phoneNumber: data.phoneNumber,
                        website: data.website,
                        eventType: data.eventType,
                        location: data.location,
                        location_en: data.location_en,
                        mapCode: data.mapCode,
                        invitationLink: data.invitationLink,
                        recording: data.recording,
                        video: data.video,
                        slider: data.photos || [], // Убедитесь, что это соответствует вашему запросу
                        redirectButton: data.redirectButton,
                        theme: data.theme,
                        theme_en: data.theme_en,
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
                language={i18n.language} // Добавляем language
            />
        </div>
        </ClientWrapper>
    );
};

export default ExhibitionPage;
