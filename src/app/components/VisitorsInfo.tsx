"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Ваш клиент для Sanity
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import PartnersSlider from "./PartnersSlider";

const VisitorsInfo: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `
                    *[_type == "visitorsInfo"][0] {
                        "firstTitle": firstTitle,
                        "firstIntro": firstIntro,
                        "firstSectionTitle": firstSection.sectionTitle,
                        "firstSectionContent": firstSection.sectionContent,
                        "secondTitle": secondTitle,
                        "secondIntro": secondIntro,
                        "secondSectionTitle": secondSection.sectionTitle,
                        "secondSectionContent": secondSection.sectionContent
                    }
                `;
                const fetchedData = await client.fetch(query);
                setData(fetchedData);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center text-lg">{t("Загрузка...")}</p>;
    }

    if (!data) {
        return <p className="text-center text-lg text-red-500">{t("Информация не найдена.")}</p>;
    }

    const currentLanguage = i18n.language === "ru" ? "ru" : "en";

    return (
        <div className="px-5 max-w-[1350px] mx-auto">
            {/* Первый заголовок */}
            {data.firstTitle?.[currentLanguage] && (
                <div className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-12 mt-24 relative">
                    <div className="flex items-center">
                        <h2
                            id="visitors"
                            className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center"
                        >
                            {data.firstTitle[currentLanguage]}
                        </h2>
                    </div>
                </div>
            )}

            {/* Первый вводный текст */}
            {data.firstIntro?.[currentLanguage] && (
                <div className="mb-4 text-lg">
                    <PortableText value={data.firstIntro[currentLanguage]} />
                </div>
            )}
            <PartnersSlider />
            {/* Первый раздел */}
            {data.firstSectionTitle?.[currentLanguage] && (
                <div className="mb-4 text-lg">
                    <h3 className="text-xl font-semibold mt-6 mb-2">
                        {data.firstSectionTitle[currentLanguage]}
                    </h3>
                    {data.firstSectionContent?.[currentLanguage] && (
                        <PortableText value={data.firstSectionContent[currentLanguage]} />
                    )}
                </div>
            )}


            {/* Второй заголовок */}
            {data.secondTitle?.[currentLanguage] && (
                <div
                    id="registration"
                    className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-12 mt-16 relative"
                >
                    <div className="flex items-center">
                        <h2
                            className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center"
                        >
                            {data.secondTitle[currentLanguage]}
                        </h2>
                    </div>
                </div>
            )}

            {/* Второй вводный текст */}
            {data.secondIntro?.[currentLanguage] && (
                <div className="mb-4 text-lg">
                    <PortableText value={data.secondIntro[currentLanguage]} />
                </div>
            )}

            {/* Второй раздел */}
            {data.secondSectionTitle?.[currentLanguage] && (
                <div className="mb-4 text-lg">
                    <h3 className="text-xl font-semibold mt-6 mb-2">
                        {data.secondSectionTitle[currentLanguage]}
                    </h3>
                    {data.secondSectionContent?.[currentLanguage] && (
                        <PortableText value={data.secondSectionContent[currentLanguage]} />
                    )}
                </div>
            )}
        </div>
    );
};

export default VisitorsInfo;