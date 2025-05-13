import React from "react";
import Image from "next/image";

export default function RelaxBlock() {
    return (
        <div className="relative w-full bg-gradient-to-br from-[#fff0e5] via-[#ffe9e0] to-[#fff5f0] py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12 text-center md:text-left">
                {/* Левая часть: текст */}
                <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-[#FF4606] leading-tight tracking-tight">
                        Отдыхай так, как хочется
                    </h2>

                    <p className="text-lg md:text-2xl text-[#2c2c2c] max-w-3xl leading-relaxed">
                        С семьёй, друзьями или коллегами — выберите формат и ритм, который вам нужен именно сейчас.
                        Выставка поставщиков, вечер у костра под гитару, полный день спорта, мастер-классы, обучение с сертификацией —
                        <span className="text-[#FF4606] font-semibold"> решать вам.</span> Это пространство для отдыха, впечатлений и свободы.
                    </p>
                </div>

                {/* Правая часть: изображение увеличено */}
                <div className="flex-1 w-full max-w-xl">
                    <Image
                        src="/drive/shem.jpg"
                        alt="Отдых"
                        width={600}
                        height={600}
                        className="rounded-xl shadow-xl object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
