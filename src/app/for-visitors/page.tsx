"use client";

import ClientWrapper from "@/app/components/ClientWrapper";
import Header from "@/app/components/Header";
import React, { useEffect, useState, useRef } from "react";
import Footer from "@/app/components/Footer";
import { useTranslation } from "react-i18next";
import VisitorsInfo from "@/app/components/VisitorsInfo";

export default function Page() {
    const { t } = useTranslation();
    const [hydrated, setHydrated] = useState(false);
    const [activeSection, setActiveSection] = useState("#visitors");
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const navRef = useRef<HTMLDivElement>(null); // Ссылка на навигацию

    const desktopStartTop = 126;
    const desktopStickyTop = 68;
    const mobileTop = 67;

    useEffect(() => {
        setHydrated(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const updateNavigationPosition = () => {
        const scrollPosition = window.scrollY;
        const navElement = navRef.current;

        if (navElement && !isMobile) {
            if (scrollPosition <= 56) {
                const newTop = `${desktopStartTop - scrollPosition}px`;
                navElement.style.top = newTop;
            } else {
                navElement.style.top = `${desktopStickyTop}px`;
            }
        }
    };

    useEffect(() => {
        if (!hydrated) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (isScrolling) return;

            updateNavigationPosition();

            const sections = [
                {
                    id: "#visitors",
                    offset: (document.querySelector("#visitors") as HTMLElement)?.offsetTop || 0,
                },
                {
                    id: "#registration",
                    offset: (document.querySelector("#registration") as HTMLElement)?.offsetTop || 0,
                },
            ];

            const offsetAdjustment = isMobile
                ? mobileTop + 100
                : desktopStickyTop + 58;

            const currentSection = sections
                .reverse()
                .find((section) => scrollPosition >= section.offset - offsetAdjustment);

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hydrated, isMobile, isScrolling]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const targetElement = document.querySelector(href) as HTMLElement;
        const navElement = navRef.current;

        if (targetElement && navElement) {
            const elementPosition = targetElement.offsetTop;

            // Проверяем, находится ли пользователь на самом верху страницы
            const isAtTop = window.scrollY === 0;

            // Устанавливаем индивидуальное смещение для каждой секции
            const additionalOffset = (() => {
                if (href === "#visitors" && !isMobile) {
                    return isAtTop ? 20 : 60; // Если пользователь на самом верху, смещение 20, иначе 60 пикселей
                }
                if (href === "#registration") {
                    return isMobile ? 90 : 60; // Смещение вниз на телефонах -120, на десктопе -200
                }
                return isMobile ? 100 : 0; // Стандартное смещение
            })();

            const offsetPosition = elementPosition - (isMobile ? mobileTop : desktopStickyTop + 38) - additionalOffset;

            if (!isMobile) {
                navElement.style.top = `${desktopStickyTop}px`;
            }

            setIsScrolling(true);

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setTimeout(() => {
                setIsScrolling(false);
                setActiveSection(href);
            }, 700);
        }
    };

    if (!hydrated) return null;
    return (
        <ClientWrapper>
            <Header />
            {/* Навигация */}
            <div
                ref={navRef}
                className={`fixed flex justify-items-center sm:justify-items-start flex-wrap justify-evenly w-full z-10 shadow-md bg-white bg-opacity-50 backdrop-blur-md ${
                    isMobile ? "" : "transition-all duration-75"
                }`}
                style={{
                    top: isMobile ? `${mobileTop}px` : `${desktopStartTop}px`,
                }}
            >
                <div className="max-w-[1350px] lg:!mx-0 !mx-auto lg:!px-5 !px-0 lg:!justify-start justify-evenly w-full flex">
                    <nav className="flex sm:justify-items-start justify-center gap-8 bg-transparent py-4">
                        {[
                            { href: "#visitors", label: t("Для посетителей") },
                            { href: "#registration", label: t("Порядок регистрации") },
                        ].map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className={`text-base font-medium ${
                                    activeSection === href
                                        ? "text-orange text-sm lg:text-base border-b-2 border-orange"
                                        : "text-gray-600 text-sm lg:text-base no-hover-on-mobile"
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

<VisitorsInfo></VisitorsInfo>

            <Footer />
        </ClientWrapper>
    );
}