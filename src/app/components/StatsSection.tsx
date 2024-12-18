"use client";

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

const StatsSection: React.FC = () => {
    return (
        <section className="bg-white text-black py-10 sm:py-16 md:py-20 relative">
            <div className="max-w-[1350px] container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Левая часть: Текст и кнопка */}
                <div className="md:w-1/2 text-left mb-8 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-bold mb-6 sm:mb-8 leading-tight">
                        Международный центр деловой активности
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10">
                        Мы предлагаем вам возможность познакомиться с лучшими международными
                        выставками, конгрессами и событиями. Узнайте больше о мероприятиях и нашей
                        площадке.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button
                            className="w-[90%] sm:w-auto bg-darkGray text-white hover:text-orange hover:bg-white border-2 border-darkGray hover:border-orange px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 ease-in-out">
                            Перейти к выставкам
                        </button>
                    </div>

                </div>

                {/* Правая часть: SVG */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <Image
                            src="/Illustration1.svg" // Замените на ваш SVG
                            alt="Описание SVG"
                            width={300} // Уменьшил ширину для мобильных
                            height={300}
                            className="mx-auto sm:w-96 sm:h-96"
                        />
                    </div>
                </div>
            </div>

            {/* Карточки */}
            <div className="max-w-[1350px] container mx-auto px-4 mt-8 sm:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {/* Карточка 1 */}
                    <div className="bg-orange text-white p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={15} duration={2} />
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">Конференц-залов</p>
                    </div>

                    {/* Карточка 2 */}
                    <div className="bg-lightGray text-black p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center border-2 border-black">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={120} duration={2} />
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">Партнёров по всему миру</p>
                    </div>

                    {/* Карточка 3 */}
                    <div className="bg-black text-white p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center border-2">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={0} end={250000} duration={2} separator=" " />
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">Посетителей ежегодно</p>
                    </div>

                    {/* Карточка 4 */}
                    <div className="bg-white text-black p-4 sm:p-6 rounded-3xl shadow-md flex flex-col items-center border-2 border-black">
                        <span className="text-3xl sm:text-5xl font-extrabold mb-1 sm:mb-2">
                            <CountUp start={1990} end={2020} duration={2} separator=" " />
                        </span>
                        <p className="text-sm sm:text-lg font-medium text-center">Год основания</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
