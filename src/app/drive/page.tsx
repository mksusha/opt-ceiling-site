"use client";

import React, { useState, useEffect, useRef } from "react";
import "@/app/drive/styles/gradientify.css";
import { Award, Briefcase, Gift, Presentation, Store, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import EventParticipants from "@/app/drive/EventParticipants";
import VideoSection from "@/app/drive/VideoSection";
import ProgramBlock from "@/app/drive/ProgramBlock";

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    // Используем useRef для хранения текущего значения scrollY
    const scrollRef = useRef(0);

    const handleScroll = () => {
        const newScrollY = window.scrollY;
        if (scrollRef.current !== newScrollY) {
            scrollRef.current = newScrollY;
            setScrollY(newScrollY);  // Обновляем состояние только если оно изменилось
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Инициализация AOS
        AOS.init();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Параметры для движения шариков (градиентов)
    const ballStyle1 = {
        transform: `translateY(${scrollY * 1.01}px)`, // сильное движение на скорости прокрутки
        transition: "transform 0.1s ease-out", // плавное движение
    };
    const ballStyle2 = {
        transform: `translateY(${scrollY * 1.01}px)`, // умеренное движение
        transition: "transform 0.1s ease-out", // плавное движение
    };

    return (
        <div className="relative bg-drive">
            {/* Контейнер для всей страницы с одним скроллом */}
            <div className="overflow-hidden">
                {/* Первая секция на полный экран с ограничением ширины */}
                <div className="h-screen relative bg-drive max-w-[1350px] mx-auto">
                    <div
                        className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full blur-xl opacity-50 pointer-events-none"
                        style={{
                            ...ballStyle1,
                            background:
                                "linear-gradient(0deg, #f60 0%, rgba(250, 151, 30, 0.86) 20%, #f24646 39%, rgba(245, 115, 115, 0.88) 52%, #eb6aba 71%, rgba(187, 154, 227, 0.87) 100%, rgba(217, 217, 217, 0.82) 100%)",
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-xl opacity-50 pointer-events-none"
                        style={{
                            ...ballStyle2,
                            background:
                                "linear-gradient(0deg, #f60 0%, rgba(250, 151, 30, 0.86) 20%, #f24646 39%, rgba(245, 115, 115, 0.88) 52%, #eb6aba 71%, rgba(187, 154, 227, 0.87) 100%, rgba(217, 217, 217, 0.82) 100%)",
                        }}
                    ></div>
                    <header
                        className="fixed top-0 left-0 w-full bg-opacity-20 bg-white backdrop-blur-lg flex items-center justify-between px-4 sm:px-8 py-2 sm:py-4 z-50"
                    >
                        <div className="flex items-center">
                            <img src="/logo3.svg" alt="Logo OPT1" className="h-10 sm:h-14 mr-2 sm:mr-4"/>
                            <img src="/logo-opt2.png" alt="Logo2" className="h-10 sm:h-14"/>
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm sm:text-lg text-white font-bold">+7 (999) 123-45-67</p>
                        </div>
                        <a
                            href="tel:+79991234567"
                            className="block sm:hidden text-sm text-white font-bold"
                        >
                            Позвонить
                        </a>
                    </header>

                    <main className="flex flex-col items-center justify-center h-full px-4">
                        <div className="text-center text-white relative z-10">
                            <h1 className="text-base sm:text-lg font-bold">1 марта Чебоксары</h1>
                            <ul className="mt-4 space-y-2">
                                <li className="font-bold text-[50px] sm:text-[80px] md:text-[120px] leading-[110%] uppercase text-center">
                                    Волжский
                                </li>
                                <li className="font-bold text-[60px] sm:text-[100px] md:text-[140px] leading-[110%] uppercase text-center">
                                    ДРАЙВ
                                </li>
                                <div className="absolute w-full flex justify-center mt-4 sm:mt-6">
                                    <button
                                        className="gradient-button px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                                        onClick={() =>
                                            window.open("https://optceiling.timepad.ru/event/3173857/", "_blank")
                                        }
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </main>


                </div>
                <section className="mt-screen backdrop-blur-section px-8 py-8 max-w-[1350px] mx-auto">
                    <div className="w-full text-center">
                        <h2 className="text-[50px] font-bold text-center text-white mb-10">Вас ждет:</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white justify-items-center">
                            <li
                                className="flex backdrop-blur-card-small items-center space-x-4 justify-center"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <Gift className="w-10 h-10"/>
                                <span>Подарки для всех гостей</span>
                            </li>
                            <li
                                className="flex backdrop-blur-card-small items-center space-x-4 justify-center"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                            >
                                <Presentation className="w-10 h-10"/>
                                <span>Презентация новинок на рынке натяжных потолков</span>
                            </li>
                            <li
                                className="flex backdrop-blur-card-small items-center space-x-4 justify-center"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                            >
                                <Award className="w-10 h-10"/>
                                <span>17 брендов-компаний, участвующих в выставке</span>
                            </li>
                            <li
                                className="flex backdrop-blur-card-small items-center space-x-4 justify-center"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            >
                                <Store className="w-10 h-10"/>
                                <span>9 тренировочных стендов для того, чтобы попробовать руками</span>
                            </li>
                            <li
                                className="flex backdrop-blur-card-small items-center space-x-4 justify-center"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <User className="w-10 h-10"/>
                                <span>200 человек из вашей сферы</span>
                            </li>
                            <li
                                className="flex backdrop-blur-card-small items-center space-x-4 justify-center"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                            >
                                <Briefcase className="w-10 h-10"/>
                                <span>Минимум теории, максимум практики</span>
                            </li>
                        </ul>
                    </div>
                </section>


                <EventParticipants/>
                <ProgramBlock></ProgramBlock>
                <VideoSection></VideoSection>
            </div>

        </div>
    );
};

export default HomePage;
