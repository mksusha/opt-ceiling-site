"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
// import Flag from "react-world-flags";
import { Search, Menu, X as Close } from "lucide-react"; // Иконки
import Image from "next/image";


const Flag = dynamic(() => import("react-world-flags"), { ssr: false });

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState("ru");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("lang") || i18n.language;
            i18n.changeLanguage(savedLang);
            setCurrentLang(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLang === "ru" ? "en" : "ru";
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        if (typeof window !== "undefined") {
            localStorage.setItem("lang", newLang);
        }
    };


    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    const currentFlag = currentLang === "ru" ? "GB" : "RU";

    return (
        <header>
            <div className="bg-white text-black py-3 shadow-md fixed top-0 left-0 w-full z-50">
                <div className="max-w-[1350px] container mx-auto flex justify-between items-center px-4">
                    {/* Логотип */}
                    <Image
                        src="/logo4.svg"
                        alt="Логотип Экспоцентр"
                        width={120} // Ширина
                        height={43} // Высота
                        priority
                    />



                    {/* Навигация скрыта на всех устройствах до desktop */}
                    <nav className="hidden lg:flex space-x-8 text-lg font-medium">
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Календарь мероприятий")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Партнёрам")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Посетителям")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Организаторам")}
                        </a>
                    </nav>

                    {/* Кнопка для открытия мобильного меню */}
                    <button className="block lg:hidden text-black" onClick={toggleMobileMenu}>
                        <Menu size={28}/>
                    </button>
                </div>
            </div>

            {/* низ шапка */}
            <div className="hidden lg:block bg-darkGray text-white text-lg py-2">
                <div className="max-w-[1350px] container mx-auto flex justify-between items-center px-4">
                    {/* Справочный центр */}
                    <div className="font-normal text-lg hidden md:block">
                        {t("Справочный центр")}:{" "}
                        <a
                            href="tel:+78007073799"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            8 (800) 707-37-99
                        </a>
                    </div>

                    {/* Навигация */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {t("О компании")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {t("Новости")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {t("Контакты")}
                        </a>

                        {/* Поиск */}
                        <div className="flex items-center space-x-2">
                            <Search
                                size={20}
                                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
                            />
                        </div>

                        {/* Кнопка переключения языка */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 bg-gray-400 text-white px-4 py-1 font-semibold rounded-3xl hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            <div className="w-8 h-8 rounded-full border-2 border-gray-300 overflow-hidden">
                                <Flag
                                    code={currentFlag}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <span className="text-lg">{currentLang === "ru" ? "EN" : "RU"}</span>
                        </button>
                    </nav>
                </div>
            </div>


            {/* Мобильное меню */}
            {isMobileMenuOpen && (
                <div
                    className="bg-white text-black fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center">
                    <button
                        className="absolute top-4 right-4 text-black"
                        onClick={toggleMobileMenu}
                    >
                        <Close size={28}/>
                    </button>
                    <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("Календарь мероприятий")}
                        </a>
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("Партнёрам")}
                        </a>
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("Посетителям")}
                        </a>
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("Организаторам")}
                        </a>
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("О компании")}
                        </a>
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("Новости")}
                        </a>
                        <a href="#" onClick={toggleMobileMenu}>
                            {t("Контакты")}
                        </a>
                    </nav>
                    {/* Кнопка переключения языка */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center space-x-2 bg-gray-400 text-black px-4 py-2 font-semibold rounded-3xl hover:bg-lightGray hover:bg-opacity-10 transition-all duration-300 ease-in-out"
                    >
                        <div className="w-8 h-8 rounded-full border-2 border-lightGray overflow-hidden">
                            <Flag
                                code={currentFlag}
                                style={{width: "100%", height: "100%", objectFit: "cover"}}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-bold">{currentLang === "ru" ? "EN" : "RU"}</span>

                        </div>
                    </button>

                </div>
            )}

        </header>
    );
};

export default Header;
