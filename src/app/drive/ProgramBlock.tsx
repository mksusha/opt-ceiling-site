"use client";

import React, { useEffect } from "react";
import { CheckCircle, PartyPopper, Calendar, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируем стили для AOS

const Timeline = () => {
    const timelineData = [
        {
            time: "11:00 – 12:00",
            event: "Регистрация участников",
            icon: <Calendar className="w-6 h-6 text-white" />,
        },
        {
            time: "12:00 – 15:00",
            event: "Презентация новинок, материалов и комплектующих",
            icon: <CheckCircle className="w-6 h-6 text-white" />,
        },
        {
            time: "15:00 – 19:00",
            event: "Посещение выставки, участие в мастер-классах и конкурсах",
            icon: <Clock className="w-6 h-6 text-white" />,
        },
        {
            time: "19:00 – 22:00",
            event: "Afterparty",
            highlight: true,
            icon: <PartyPopper className="w-6 h-6 text-white" />,
        },
    ];

    // Инициализация AOS после монтирования компонента
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            easing: 'ease-in-out', // Тип анимации
            once: true, // Анимация будет выполнена только один раз
        });
    }, []);

    return (
        <div className="mt-16 px-4 sm:px-8 py-8 max-w-[1350px] mx-auto relative">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
                Программа
            </h2>
            <div className="relative">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center sm:flex-row sm:items-start mb-10 sm:mb-14 z-10"
                        data-aos="fade-up"
                    >
                        {/* Время (слева) */}
                        <div className="w-full sm:w-1/4 text-center sm:text-right sm:pr-8 mb-2 sm:mb-0">
                            <p className="text-white font-extrabold text-lg sm:text-2xl">{item.time}</p>
                        </div>
                        {/* Иконка */}
                        <div
                            className="relative w-10 h-10 sm:w-16 sm:h-16 flex justify-center items-center mb-4 sm:mb-0">
                            <div
                                className={`w-full h-full flex justify-center items-center rounded-full shadow-2xl ${
                                    item.highlight
                                        ? "bg-gradient-to-b from-pink-300 to-pink-700"
                                        : "bg-gradient-to-b from-purple-400 to-pink-500"
                                }`}
                                style={{
                                    boxShadow: "0 3px 10px rgba(255, 105, 180, 0.2), 0 6px 20px rgba(255, 105, 180, 0.4)",
                                }}
                            >
                                {item.icon}
                            </div>
                            {/* Линия соединения */}
                            {index !== timelineData.length - 1 && (
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 top-10 sm:top-16 w-[1px] sm:w-[2px] h-[30px] sm:h-[50px] bg-white hidden sm:block"
                                ></div>
                            )}
                        </div>
                        {/* Событие (справа) */}
                        <div className="w-full sm:w-2/4 text-center sm:text-left sm:pl-8 mt-2 sm:mt-0">
                            <p
                                className={`text-white text-sm sm:text-2xl ${
                                    item.highlight ? "text-red-400 font-bold" : ""
                                }`}
                            >
                                {item.event}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Timeline;
