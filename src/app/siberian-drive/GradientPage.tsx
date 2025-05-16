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
                            className="h-6 sm:h-9 lg:h-12 mr-2"
                            loading="eager"
                        />
                        <img
                            src="/drive/wer.png"
                            alt="Logo2"
                            className="h-6 sm:h-9 lg:h-12"
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
                    className="w-full flex lg:mt-24 flex-col items-center justify-center px-1 pb-10 flex-grow"
                >
                    {/* Место (по центру) */}
                    <div
                        className="flex justify-center items-center mb-0 lg:mb-4 text-white font-bold text-3xl lg:text-7xl sm:text-3xl">
                        <MapPin className="mr-2 lg:w-12 lg:h-12 w-8 h-8"/>
                        <span>Новосибирск</span>
                    </div>

                    {/* Основной заголовок (по центру, крупно) */}
                    <div className="text-white text-center my-8 lg:my-0 mb-2">
                        <h1 className="title-large">
                            СИБИРСКИЙ <span style={{color: "var(--orange)"}}>ДРАЙВ</span>
                        </h1>
                    </div>


                    {/* Дата (по центру) */}
                    <div
                        className="text-white font-bold text-3xl  lg:mb-5 mt-2 lg:text-7xl sm:text-3xl uppercase text-center mb-8">
                        <span>19 - 20 июля 2025</span>
                    </div>
                    {/* Место (по центру) */}
                    <div
                        className="flex justify-center items-center mb-4 text-white font-bold text-xl lg:text-4xl sm:text-2xl">
                        <span>OPEN AIR</span>
                    </div>

                    {/* Кнопки "Купить билет" и "Telegram" */}
                    <div
                        data-aos="fade-up"
                        className="w-full flex flex-col md:flex-row items-center justify-center mt-5 lg:mt-5 space-y-4 md:space-y-0 md:space-x-4"
                    >
                        {/* Кнопка "Купить билет" */}
                        <a
                            href="https://optceiling.timepad.ru/event/3348038/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button w-full md:w-auto hover:bg-white hover:text-orange hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Купить билет
                        </a>

                        {/* Кнопка "Telegram" */}
                        <a
                            href="https://t.me/+lkL6xGrUY-FjZTFi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button w-full md:w-auto hover:bg-white hover:text-blue-500 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Telegram
                        </a>
                    </div>


                </div>

                {/* Бегущая строка с городами */}
                <div className="w-screen overflow-hidden whitespace-nowrap bg-transparent mt-10">
                    <div className="marquee-content text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 font-medium flex gap-10">
                        {[...Array(20)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span>МОСКВА </span>
                                <span>САНКТ-ПЕТЕРБУРГ </span>
                                <span>ЧЕБОКСАРЫ </span>
                                <span className="text-orange font-bold">НОВОСИБИРСК </span>
                            </React.Fragment>
                        ))}
                    </div>

                <style jsx>{`
                        .marquee-content {
                            display: inline-block;
                            animation: marquee 120s linear infinite;
                        }

                        @keyframes marquee {
                            0% {
                                transform: translateX(0%);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                    `}</style>
                </div>

            </div>
        </div>
    );
}