"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

interface StatsSectionProps {
    onNavigateToExhibitions: () => void;
}

const StatsSection: React.FC<StatsSectionProps> = ({ onNavigateToExhibitions }) => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    // Определяем, мобильное устройство или нет, только на клиенте
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    return (
        <section
            data-aos="fade-up"
            className="bg-white text-black py-10 sm:py-16 md:py-20 relative"
        >
            <div className="max-w-[1350px] container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Левая часть */}
                <div className="md:w-1/2 text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-bold mb-6 sm:mb-8 leading-tight">
                        {t("OptCeilingEvents")}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10">
                        {t(
                            "Масштабные элитные события, которые собирают под одной крышей самых амбициозных и талантливых профессионалов потолочной индустрии. Наша миссия – объединить лидеров в области натяжных потолков, строительства и дизайна, чтобы вместе продвигать инновации, обмениваться опытом и вдохновлять друг друга на новые достижения."
                        )}
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={onNavigateToExhibitions}
                            className="w-full sm:w-auto bg-darkGray text-white text-lg sm:text-base hover:text-orange hover:bg-white border-2 border-darkGray hover:border-orange px-4 sm:px-6 py-2 sm:py-3 rounded-2xl transition-all duration-300 ease-in-out"
                        >
                            {t("Перейти к мероприятиям")}
                        </button>
                    </div>
                </div>

                {/* Видео */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover rounded-3xl shadow-lg"
                    >
                        {isMobile ? (
                            <>
                                <source src="/video-opt1-mobile.webm" type="video/webm" />
                                <source src="/video-opt1-mobile.mp4" type="video/mp4" />
                            </>
                        ) : (
                            <>
                                <source src="/video-opt1-optimized.webm" type="video/webm" />
                                <source src="/video-opt1-optimized.mp4" type="video/mp4" />
                            </>
                        )}
                        <p>Your browser does not support the video tag.</p>
                    </video>
                </div>
            </div>

            {/* Карточки */}
            <div className="max-w-[1350px] container mx-auto px-4 mt-8 sm:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {/* Карточка 1 */}
                    <div className="bg-orange text-white p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={22} duration={2} />
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">
                            {t("Масштабных мероприятий")}
                        </p>
                    </div>

                    {/* Карточка 2 */}
                    <div className="bg-lightGray text-black p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center border-2 border-black">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={50} duration={2} />+
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">
                            {t("Городов посетили наши мероприятия")}
                        </p>
                    </div>

                    {/* Карточка 3 */}
                    <div className="bg-black text-white p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center border-2">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={1000} duration={2} separator=" " />+
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">
                            {t("Посетителей ежегодно")}
                        </p>
                    </div>

                    {/* Карточка 4 */}
                    <div className="bg-white text-black p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center border-2 border-black">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={40} duration={2} separator=" " />+
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">
                            {t("Партнеров и спонсоров")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
