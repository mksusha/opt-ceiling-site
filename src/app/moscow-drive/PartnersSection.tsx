import React from "react";

export default function PartnersSection() {
    const generalPartner = [
        { src: "/drive/Flexypro_logo_corrected_black_text.svg", alt: "Генеральный партнер" },
    ];

    return (
        <div className="w-full mx-auto px-5 pt-10 bg-midGray">
            <div className="max-w-[1350px] w-full mx-auto">

                {/* Общий заголовок */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-12 uppercase text-center">
                    Наши партнёры
                </h2>

                {/* Генеральный партнер */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-16 uppercase text-center">
                        Генеральный партнёр
                    </h2>
                    <div className="flex justify-center mb-5 p-6 rounded-lg partner-card">
                        {generalPartner.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="rounded-[19px] p-2"
                                style={{
                                    width: "600px",
                                    height: "300px",
                                    objectFit: "contain",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Официальные партнёры */}
                <div className="mb-20 px-5 max-w-[1350px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-16 uppercase text-center">
                        Официальные партнёры
                    </h2>
                    <div className="flex justify-center items-center h-40 bg-gray-800 rounded-2xl">
                        <p className="text-white text-xl text-center px-4">
                            Скоро здесь будут крутые партнёры, которым надо побольше места
                        </p>
                    </div>
                </div>

                {/* Партнёры */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-16 uppercase text-center">
                        Партнёры
                    </h2>
                    <div className="flex justify-center items-center h-40 bg-gray-700 rounded-2xl">
                        <p className="text-white text-xl text-center px-4">
                            Скоро здесь будут ведущие компании отрасли
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
