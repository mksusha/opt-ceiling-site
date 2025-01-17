"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client , urlFor} from "@/sanity/lib/client";
import { useTranslation } from "react-i18next";
import Header from "@/app/components/Header";
import ExhibitionDetails from "@/app/components/ExhibitionDetails";
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
    eventType_en: string;
    location?: string;
    location_en?: string;
    mapCode?: string;
    invitationLink?: string;
    recording?: string;
    videoList?: string[];
    photoList?: { asset: { _ref: string } }[];    theme?: string[];
    theme_en?: string[];
    banner?: string | null;

    image?: string;
}

const ExhibitionPage: React.FC = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const [exhibition, setExhibition] = useState<Exhibition | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExhibition = async () => {
            if (!id) {
                console.error("ID is missing from useParams");
                setLoading(false);
                return;
            }

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
    eventType_en,
    location,
    location_en,
    mapCode,
    invitationLink,
    recording,
    videoList,
    photoList,
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
                        eventType_en: data.eventType_en || "",
                        location: data.location,
                        location_en: data.location_en,
                        mapCode: data.mapCode,
                        invitationLink: data.invitationLink,
                        recording: data.recording,
                        videoList: data.videoList || [],
                        photoList: data.photoList || [],
                        theme: data.theme,
                        theme_en: data.theme_en,
                        image: data.image || "/default-placeholder.png",
                        banner: data.banner || null,
                    });
                } else {
                    console.error("No exhibition data found for the given ID.");
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных выставки:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchExhibition();
    }, [id, t, i18n.language]);

    if (loading) {
        return null;
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
                <Header />
                <ExhibitionDetails
                    exhibition={exhibition}
                    formatDate={formatDate}
                    t={t}
                    language={i18n.language}
                />


            </div>
        </ClientWrapper>
    );
};

export default ExhibitionPage;
