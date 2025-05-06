import React from "react";
import { FaCampground } from "react-icons/fa";

export default function RelaxBlock() {
    return (
        <div className="relative w-full bg-gradient-to-br from-[#fff0e5] via-[#ffe9e0] to-[#fff5f0] py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center flex flex-col items-center space-y-12">
                {/* Иконка в круге */}
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-white shadow-xl border-4 border-[#FF4606]">
                    <FaCampground className="text-[#FF4606] text-5xl md:text-6xl" />
                </div>

                {/* Заголовок */}
                <h2 className="text-4xl md:text-6xl font-black uppercase text-[#FF4606] leading-tight tracking-tight">
                    Отдыхай так, как хочется
                </h2>

                {/* Подзаголовок / текст */}
                <p className="text-lg md:text-2xl text-[#2c2c2c] max-w-3xl leading-relaxed">
                    С семьёй, друзьями или коллегами — выберите формат и ритм, который вам нужен именно сейчас.
                    Выставка поставщиков, вечер у костра под гитару, полный день спорта, мастер-классы, обучение с сертификацией —
                    <span className="text-[#FF4606] font-semibold"> решать вам.</span> Это пространство для отдыха, впечатлений и свободы.
                </p>
            </div>
        </div>
    );
}
