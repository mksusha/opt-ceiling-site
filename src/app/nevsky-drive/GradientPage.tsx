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
                            className="h-9 lg:h-12 sm:h-12 mr-3"
                            loading="eager"
                        />
                        <img
                            src="/logo-opt-nevsky.svg"
                            alt="Logo2"
                            className="h-9 lg:h-12 sm:h-12 "
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

                {/* Основной контент */}
                <div
                    data-aos="fade-up"
                    className="w-full flex flex-col items-center justify-center px-1 pb-10 flex-grow"
                >
                    {/* Место (по центру) */}
                    <div className="flex justify-center items-center mb-4 text-white font-bold text-3xl lg:text-7xl sm:text-3xl">
                        <MapPin className="mr-2 lg:w-12 lg:h-12 w-8 h-8" />
                        <span>Санкт-Петербург</span>
                    </div>

                    {/* Основной заголовок (по центру, крупно) */}
                    <div className="text-white text-center my-8 lg:my-0 mb-4">
                        <h1 className="title-large">
                            НЕВСКИЙ <span style={{ color: "var(--orange)" }}>ДРАЙВ</span>
                        </h1>
                    </div>

                    {/* Дата (по центру) */}
                    <div className="text-white font-bold text-3xl lg:mb-0 mt-5 lg:text-7xl sm:text-3xl uppercase text-center mb-8">
                        <span>24 мая 2025</span>
                    </div>


                    {/* Кнопки "Купить билет" и "Telegram" */}
                    <div
                        data-aos="fade-up"
                        className="w-full flex flex-col md:flex-row items-center justify-center mt-5 lg:mt-10 space-y-4 md:space-y-0 md:space-x-4"
                    >
                        {/* Кнопка "Купить билет" */}
                        <a
                            href="https://optceiling.timepad.ru/event/3277033/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button w-full md:w-auto hover:bg-white hover:text-orange hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Купить билет
                        </a>

                        {/* Кнопка "Telegram" */}
                        <a
                            href="https://t.me/+nC5GWp261JU4ZGEy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button w-full md:w-auto hover:bg-white hover:text-blue-500 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Telegram
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}