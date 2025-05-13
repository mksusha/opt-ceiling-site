import React from "react";
import Image from "next/image";

export default function DriveBlock() {
    return (
        <div className="w-full bg-[#fff7f2] py-24 px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
                {/* Левая часть: текст */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-black text-[#FF4606] mb-6">
                        ДРАЙВ — это повод зажигать по-крупному!
                    </h2>
                    <p className="text-lg md:text-xl text-[#2c2c2c] mb-8">
                        Организаторы заготовили не просто призы, а настоящий адреналин — среди подарков мотоцикл, и шанс выиграть есть у каждого!
                    </p>
                    <ul className="list-disc pl-6 text-[#333] space-y-1 text-sm md:text-base">
                        <li>Модель: ROCKOT ZR250, 2024</li>
                        <li>Двигатель: 223 см³, 4-тактный, YX166FMM</li>
                        <li>Трансмиссия: 5 передач (1-N-2-3-4-5)</li>
                        <li>Стартер: Электро + кик</li>
                        <li>Подвеска: Стальная рама, алюминиевые колёса</li>
                        <li>Тормоза: 270/240 мм (перед/зад)</li>
                        <li>Размер колес: 21/18</li>
                    </ul>
                </div>

                {/* Правая часть: изображение */}
                <div className="flex-1 max-w-lg w-full">
                    <Image
                        src="/drive/moto.jpg"
                        alt="Мотоцикл ROCKOT ZR250"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
