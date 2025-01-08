import React from "react";

export default function PartnersSection() {
    // Данные для логотипов
    const generalPartner = [
        { src: "/drive/Flexypro_logo_corrected_black_text.svg", alt: "Генеральный партнер" },
    ];

    const officialPartner = [
        { src: "/drive/Копия DENKIRS_logo1.png", alt: "Официальный партнер" },
    ];

    const partners = [
        { src: "/drive/ШТОК лого.svg", alt: "Партнер 7" },

        { src: "/drive/U-line_логотип.svg", alt: "Партнер 2" },
        { src: "/drive/LedsPower1.png", alt: "Партнер 2" },
        { src: "/drive/s.png", alt: "Партнер 2" },
        { src: "/drive/D.png", alt: "Партнер 2" },
        { src: "/drive/Копия photo_2024-06-03_18-05-42.jpg", alt: "Партнер 5" },
        { src: "/drive/B.png", alt: "Партнер 2" },
        { src: "/drive/Копия лого.png", alt: "Партнер 6" },
        { src: "/drive/K.svg", alt: "Партнер 2" },
        { src: "/drive/Da.png", alt: "Партнер 2" },
        { src: "/drive/V.png", alt: "Партнер 2" },
        { src: "/drive/E.png", alt: "Партнер 2" },
        { src: "/drive/P.png", alt: "Партнер 2" },
        { src: "/drive/Bl.svg", alt: "Партнер 2" },

    ];

    return (
        <div className="w-full max-w-[1350px] mx-auto px-5 pt-10 bg-white">
            {/* Генеральный партнер */}
            <div className="mb-12">
                <h3
                    className="font-semibold text-[32px] lg:text-[48px]  mb-14 sm:mb-16 mt-6 sm:mt-12 uppercase text-left "
                    style={{
                        color: "#3b3b3b",
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Генеральный партнер
                </h3>
                <div className="flex justify-center mb-5 p-6 rounded-lg partner-card">
                    {generalPartner.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="rounded-[19px]  p-2"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "contain",
                            }}
                        />
                    ))}
                </div>


            </div>

            {/* Официальный партнер */}
            <div className="mb-12">
                <h3
                    className="font-semibold text-[32px] lg:text-[48px]  mb-14 sm:mb-16 mt-6 sm:mt-12 uppercase text-left "
                    style={{
                        color: "#3b3b3b",
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Официальный партнер
                </h3>
                <div className="flex justify-center p-6  rounded-lg partner-card">
                    {officialPartner.map((logo, index) => (
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

            {/* Партнеры */}
            <div className="mb-12">
                <h3
                    className="font-semibold text-[32px] lg:text-[48px]  mb-14 sm:mb-16 mt-6 sm:mt-12 uppercase text-left "
                    style={{
                        color: "#3b3b3b",
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                Партнеры
                </h3>
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {partners.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="partner-card-desktop rounded-[19px]"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
