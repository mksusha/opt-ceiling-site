"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
// import Flag from "react-world-flags";
import { Search, Menu, X as Close } from "lucide-react"; // Иконки
import Image from "next/image";
import Link from "next/link";
import SearchComponent from "@/app/components/SearchComponent";
import SearchModal from "@/app/components/SearchComponent";


const Flag = dynamic(() => import("react-world-flags"), { ssr: false });

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState("ru");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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



    const toggleSearchModal = () => setIsSearchModalOpen((prev) => !prev);
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    const currentFlag = currentLang === "ru" ? "GB" : "RU";

    return (
        <header>
            <div className="bg-white text-black py-3 shadow-md fixed top-0 left-0 w-full z-50">
                <div className="max-w-[1350px] container mx-auto flex justify-between items-center px-4">
                    <Link href="/" passHref>
                        <Image
                            src="/logo4.svg"
                            alt="Логотип Экспоцентр"
                            width={120} // Ширина
                            height={43} // Высота
                            priority
                        />
                    </Link>



                    {/* Навигация скрыта на всех устройствах до desktop */}
                    <nav className="hidden lg:flex space-x-8 text-lg font-medium">
                        <a
                            href="/calendar"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Календарь мероприятий")}
                        </a>
                        <a
                            href="/partners"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Партнёрам")}
                        </a>
                        <a
                            href="/for-visitors"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Посетителям")}
                        </a>
                        <a
                            href="/clients"
                            className="hover:bg-lightGray hover:bg-opacity-50 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out inline-block"
                        >
                            {t("Заказчикам")}
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
                            href="tel:+79807155232"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            +7 980-715-52-32
                        </a>
                    </div>

                    {/* Навигация */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="/about"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {t("О компании")}
                        </a>
                        <a
                            href="/news"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {t("Новости")}
                        </a>
                        <a
                            href="/contacts"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {t("Контакты")}
                        </a>

                        {/* Поиск */}
                        <div className="flex items-center ">
                            {/* Кнопка для открытия модального окна */}
                            <button
                                onClick={toggleSearchModal}
                                className="text-white hover:text-gray-600 transition duration-300 flex items-center"
                            >
                                <Search size={20} className="mr-2" />

                            </button>

                            {/* Модальное окно */}
                            <SearchModal
                                isOpen={isSearchModalOpen}
                                onClose={toggleSearchModal}
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
                                    style={{width: "100%", height: "100%", objectFit: "cover"}}
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
                        <a href="/calendar" onClick={toggleMobileMenu}>
                            {t("Календарь мероприятий")}
                        </a>
                        <a href="/partners" onClick={toggleMobileMenu}>
                            {t("Партнёрам")}
                        </a>
                        <a href="/for-visitors" onClick={toggleMobileMenu}>
                            {t("Посетителям")}
                        </a>
                        <a href="/clients" onClick={toggleMobileMenu}>
                            {t("Заказчикам")}
                        </a>
                        <a href="/about" onClick={toggleMobileMenu}>
                            {t("О компании")}
                        </a>
                        <a href="/news" onClick={toggleMobileMenu}>
                            {t("Новости")}
                        </a>
                        <a                             href="/contacts"
                                                       onClick={toggleMobileMenu}>
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
