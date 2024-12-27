"use client";

import ClientWrapper from "@/app/components/ClientWrapper";
import Header from "@/app/components/Header";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import { useTranslation } from "react-i18next";
import PartnersPage from "@/app/components/PartnersPage";

export default function Page() {
    const { t } = useTranslation();
    const [hydrated, setHydrated] = useState(false);
    const [activeSection, setActiveSection] = useState("#partners");
    const [scrollTop, setScrollTop] = useState(126); // Изначальное положение навигации
    const [isMobile, setIsMobile] = useState(false); // Для отслеживания мобильных экранов
    const desktopStartTop = 126; // Начальное положение для десктопа
    const desktopStickyTop = 68; // Позиция фиксации навигации
    const mobileTop = 67; // Фиксированное положение на мобильных

    useEffect(() => {
        setHydrated(true);

        // Отслеживаем размер экрана
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Для ширины меньше 1024px
        };

        handleResize(); // Устанавливаем начальное состояние
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!hydrated || isMobile) return; // Пропускаем логику скролла на мобильных устройствах

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Логика для десктопа: синхронное движение
            if (scrollPosition <= 56) {
                // Навигация движется плавно вверх
                const newTop = desktopStartTop - scrollPosition;
                setScrollTop(newTop);
            } else {
                // Навигация фиксируется под хедером
                setScrollTop(desktopStickyTop);
            }

            const sections = [
                {
                    id: "#partners",
                    offset: document.querySelector("#partners") ? (document.querySelector("#partners") as HTMLElement).offsetTop : undefined
                },
                {
                    id: "#participation",
                    offset: document.querySelector("#participation") ? (document.querySelector("#participation") as HTMLElement).offsetTop : undefined
                },
                {
                    id: "#application",
                    offset: document.querySelector("#application") ? (document.querySelector("#application") as HTMLElement).offsetTop : undefined
                },
            ];



            const currentSection = sections
                .reverse()
                .find((section) =>
                    scrollPosition >= (section.offset || 0) - (desktopStickyTop + 58)
                );

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hydrated, isMobile]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const mobileTop = 67  ; // Увеличенное фиксированное положение на мобильных

        const targetElement = document.querySelector(href) as HTMLElement;
        if (targetElement) {
            const elementPosition = targetElement.offsetTop;
            const additionalOffset = isMobile ? 100 : 0; // Дополнительное смещение для мобильных
            const offsetPosition = elementPosition - (isMobile ? mobileTop : desktopStickyTop + 38) - additionalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setActiveSection(href);
        }


};


    if (!hydrated) return null;

    return (
        <ClientWrapper>
            <Header />

            {/* Навигация */}
            <div
                className={`fixed w-full z-10 shadow-md bg-white bg-opacity-50 backdrop-blur-md ${
                    isMobile ? "" : "transition-all duration-75"
                }`}
                style={{
                    top: isMobile ? `${mobileTop}px` : `${scrollTop}px`, // На мобильных устройствах top фиксирован
                }}
            >
                <div className="max-w-[1350px] w-full mx-auto flex px-4">
                    <nav className="flex justify-center gap-8 bg-transparent py-4">
                        {[
                            { href: "#partners", label: t("Партнерам") },
                            { href: "#participation", label: t("Порядок участия") },
                            { href: "#application", label: t("Онлайн-заявка") },
                        ].map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className={`text-base font-medium ${
                                    activeSection === href
                                        ? "text-orange text-sm lg:text-base border-b-2 border-orange"
                                        : "text-gray-600 text-sm lg:text-base hover:text-orange"
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <PartnersPage />

            <Footer />
        </ClientWrapper>
    );
}
