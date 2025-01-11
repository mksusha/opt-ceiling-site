"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useTranslation } from "react-i18next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientWrapper from "@/app/components/ClientWrapper";

interface ContactInfo {
    address_ru: string;
    address_en: string;
    map_code: string;
}

const Contacts: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const query = `
                *[_type == "contactInfo"][0] {
                    address_ru,
                    address_en,
                    map_code
                }
                `;
                const data = await client.fetch(query);

                setContactInfo(data || null);
            } catch (error) {
                console.error("Ошибка при загрузке контактной информации:", error);
            }
        };

        fetchContactInfo();
    }, []);

    useEffect(() => {
        if (contactInfo?.map_code) {
            const mapContainer = document.getElementById("map-container");
            if (mapContainer) {
                mapContainer.innerHTML = contactInfo.map_code;
                const scriptElement = mapContainer.querySelector("script");
                if (scriptElement) {
                    const newScript = document.createElement("script");
                    newScript.src = scriptElement.src;
                    newScript.async = scriptElement.async;
                    newScript.charset = scriptElement.charset;
                    mapContainer.innerHTML = ""; // Удаляем старый скрипт
                    mapContainer.appendChild(newScript); // Добавляем новый скрипт
                }
            }
        }
    }, [contactInfo]);

    if (!contactInfo) {
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
                        {t("Контакты")}
                    </h1>
                </div>

                {/* Адрес и карта */}
                <div className="mb-14">
                    {/* Заголовок и адрес в одной строке */}
                    <div className="text-center lg:text-left lg:flex lg:items-center  lg:gap-2">
                        <h2 className="text-3xl font-semibold mb-4 lg:mb-0">
                            {isEnglish ? "Address:" : "Адрес:"}
                        </h2>
                        <p className="text-2xl  lg:ml-2">
                            {isEnglish ? contactInfo.address_en : contactInfo.address_ru}
                        </p>
                    </div>

                    {/* Карта */}
                    {contactInfo.map_code && (
                        <div
                            id="map-container"
                            className="w-full h-64 border rounded-lg overflow-hidden mt-12"
                            style={{ maxHeight: "400px", minHeight: "300px" }}
                        >
                            {/* Код для отображения карты */}
                        </div>
                    )}
                </div>
            </main>
            <Footer/>
        </ClientWrapper>
    );
};

export default Contacts;