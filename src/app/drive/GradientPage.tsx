'use client'
import React, { useEffect } from "react";
import { MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GradientPage() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Длительность анимации в миллисекундах
            once: true, // Анимация запускается только один раз
        });
    }, []);

    return (
        <div className="background-gray">
            {/* Хедер */}
            <header
                data-aos="fade-down"
                className="w-full fixed top-0 left-0 right-0 z-50 bg-midGray bg-opacity-65 backdrop-blur-md"
            >
                <div className="max-w-[1350px] m-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
                    {/* Логотипы */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/logo3.svg"
                            alt="Logo OPT1"
                            className="h-8 sm:h-12 mr-2"
                            loading="eager"
                        />
                        <img
                            src="/logo-opt2.png"
                            alt="Logo2"
                            className="h-8 sm:h-12"
                            loading="eager"
                        />
                    </div>

                    {/* Номер телефона */}
                    <div className="flex items-center">
                        <a
                            href="tel:+79807155232"
                            className="text-white text-sm sm:text-lg font-light"
                        >
                            +7 (980) 715-52-32
                        </a>
                    </div>
                </div>
            </header>

            {/* Контент */}
            <div
                className="min-h-screen max-w-[1350px] mx-auto w-full flex flex-col items-center justify-between pt-24"
            >
                {/* Кнопка Зарегистрироваться */}
                <div
                    data-aos="fade-up"
                    className="w-full flex justify-left sm:justify-end mt-12 sm:mt-6"
                >
                    <a
                        href="https://optceiling.timepad.ru/event/3173857/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button hover:bg-white hover:text-orange hover:shadow-lg transition-all duration-300"
                    >
                        Зарегистрироваться
                    </a>
                </div>

                {/* Основной контент */}
                <div
                    data-aos="fade-up"
                    className="w-full flex flex-col items-start px-1 pb-10"
                >
                    {/* Дата и место */}
                    <div
                        className="flex items-center space-x-2 mb-16 lg:mb-0 text-white font-light text-3xl sm:text-4xl uppercase"
                    >
                        <span>1 марта</span>
                        <span>|</span>
                        <div className="flex items-center">
                            <MapPin className="mr-2 w-6 h-6" />
                            <span>Чебоксары</span>
                        </div>
                    </div>

                    {/* Основной заголовок */}
                    <div className="text-white">
                        <h1 className="title-large mb-14">
                            Волжский <span style={{ color: "var(--orange)" }}>Драйв</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}