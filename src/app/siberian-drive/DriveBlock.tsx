import React from "react";
import Image from "next/image";

export default function DriveBlock() {
    return (
        <div className="w-full bg-[#fff7f2] pt-24 pb-14 px-6">
            <div className="max-w-[1350px] mx-auto flex flex-col items-center text-center space-y-6">
                {/* Заголовок */}
                <h2
                    className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#FF4606]  uppercase text-center"
                    style={{
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Главные призы от компании ВерХаус
                </h2>

                {/* Подзаголовок */}
                <h3 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c]">
                    Мотоцикл эндуро ROCKOT ZR250 и скутер JILANG N-Max 49cc
                </h3>

                {/* Описание */}
                <p className="text-lg md:text-xl text-[#2c2c2c] max-w-3xl">
                    Организаторы заготовили не просто призы, а настоящий адреналин и шанс выиграть есть у каждого!
                </p>

                {/* Изображения */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-24 mt-6">
                    <div className="!w-96 sm:w-[360px]">
                        <Image
                            src="/drive/moto1.png"
                            alt="Мотоцикл ROCKOT ZR250"
                            width={400}
                            height={400}
                            className="object-contain w-full h-auto drop-shadow-xl"
                        />
                    </div>
                    <div className="!w-96 sm:w-[360px]">
                        <Image
                            src="/drive/moto2.png"
                            alt="Скутер JILANG N-Max 49cc"
                            width={360}
                            height={360}
                            className="object-contain w-full h-auto drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
