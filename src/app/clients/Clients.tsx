"use client";

import "../i18n";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MySlider from "@/app/components/MySlider";
import EventList from "@/app/components/EventsList";
import PartnersForm from "@/app/components/PartnersForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { client } from "@/sanity/lib/client";
import ClientWrapper from "@/app/components/ClientWrapper";

const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
    });
};

type Event = {
    _id: string;
    titleRu: string;
    titleEn: string;
    date: string;
    imageUrl: string;
    url: string;
};

const ClientsPage = () => {
    const { t } = useTranslation();
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [hydrated, setHydrated] = useState(false);
    const [activeSection, setActiveSection] = useState("#clients");
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);

    const desktopStartTop = 126;
    const desktopStickyTop = 68;
    const mobileTop = 67;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 50,
            easing: "ease-in-out",
        });

        const fetchEvents = async (): Promise<void> => {
            try {
                const data = await client.fetch<Event[]>(
                    "*[_type == \"photoSection\"]{_id, titleRu, titleEn, date, \"imageUrl\": image.asset->url, url}"
                );

                await Promise.all(data.map((event) => preloadImage(event.imageUrl)));
                setEvents(data);
            } catch (error) {
                console.error("Ошибка загрузки событий:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

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
                navElement.style.top = `${desktopStartTop - scrollPosition}px`;
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
                    id: "#clients",
                    offset: (document.querySelector("#clients") as HTMLElement)?.offsetTop || 0,
                },
                {
                    id: "#application",
                    offset: (document.querySelector("#application") as HTMLElement)?.offsetTop || 0,
                },
                {
                    id: "#events",
                    offset: (document.querySelector("#events") as HTMLElement)?.offsetTop || 0,
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
                if (href === "#clients" && !isMobile) {
                    return isAtTop ? 20 : 60; // Если пользователь на самом верху, смещение 20, иначе 60 пикселей
                }
                if (href === "#application") {
                    return isMobile ? -120 : -160; // Смещение вниз на телефонах -120, на десктопе -200
                }
                if (href === "#events") {
                    return isMobile ? -30 : -90; // Смещение вниз -80 пикселей одинаково для всех
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



    return (
        <ClientWrapper>
            <Header />

            <div
                ref={navRef}
                className={`fixed flex justify-items-center sm:justify-items-start flex-wrap justify-evenly w-full z-10 shadow-md bg-white bg-opacity-50 backdrop-blur-md ${
                    isMobile ? "" : "transition-all duration-75"
                }`}
                style={{
                    top: isMobile ? `${mobileTop}px` : `${desktopStartTop}px`,
                }}
            >
                <div className="max-w-[1350px] lg:!mx-0 !mx-auto lg:!px-5 !px-0 lg:!justify-start justify-evenly w-full flex ">
                    <nav className="flex sm:justify-items-start justify-center gap-8 bg-transparent py-4">
                        {[{ href: "#clients", label: t("Заказчикам") },
                            { href: "#application", label: t("Онлайн-заявка") },
                            { href: "#events", label: t("Галерея")  }].map(({ href, label }) => (
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

            <div data-aos="fade-up" className="min-h-screen mt-20">
                <div id="clients" className="max-w-[1350px] mx-auto py-8 px-4">
                    <div data-aos="fade-up" className="mb-8">
                        <h2 className="text-3xl font-bold">{t("partners.infoTitle")}</h2>
                        <p className="mt-4 text-lg">{t("partners.eventSummary")}</p>
                        <p className="mt-4 text-lg">{t("partners.mission")}</p>
                    </div>
                    <div className="mb-8">
                        <MySlider/>
                        <p className="mt-4 text-lg">{t("partners.offer")}</p>
                    </div>
                    <div id="application" ref={formRef}>
                        <PartnersForm />
                    </div>
                    <div  className="mt-10">
                        <h2 className="text-3xl font-bold mb-6">{t("Фото с мероприятий")}</h2>
                        {loading ? (
                            <div className="skeleton-events space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-24 bg-gray-200 animate-pulse"></div>
                                ))}
                            </div>
                        ) : events.length > 0 ? (
                            <div id='events'>
                                <EventList events={events} />
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">{t("events.noEvents")}</p>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </ClientWrapper>
    );
};

export default ClientsPage;
