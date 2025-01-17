import React from "react";

export default function PartnersSection() {
    // Данные для логотипов
    const generalPartner = [
        { src: "/drive/Flexypro_logo_corrected_black_text.svg", alt: "Генеральный партнер" },
    ];

    const partners = [
        { src: "/drive/ШТОК лого.svg", alt: "Партнер 1" },
        { src: "/drive/Копия DENKIRS_logo1.png", alt: "Партнер 2" },
        { src: "/drive/U-line_логотип.svg", alt: "Партнер 3" },
        { src: "/drive/LL.png", alt: "Партнер 4" },
        { src: "/drive/s.png", alt: "Партнер 5" },
        { src: "/drive/D.png", alt: "Партнер 6" },
        { src: "/drive/RRRR.png", alt: "Партнер 7" }, // Этот партнер

        { src: "/drive/K.png", alt: "Партнер 8" },
        { src: "/drive/Da.png", alt: "Партнер 9" },
        { src: "/drive/V.png", alt: "Партнер 10" },

        { src: "/drive/PQ.png", alt: "Партнер 11" },

        { src: "/drive/DL.png", alt: "Партнер 12" },
        { src: "/drive/HS.png", alt: "Партнер 13" },
        { src: "/drive/Pazzle-1.png", alt: "Партнер 14" },
    ];

    return (
        <div className="w-full max-w-[1350px] mx-auto px-5 pt-10 bg-white">
            {/* Генеральный партнер */}
            <div className="mb-12">
                <h3
                    className="font-semibold text-[32px] lg:text-[48px] mb-14 sm:mb-16 mt-6 sm:mt-12 uppercase text-left"
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
                    className="font-semibold text-[32px] lg:text-[48px] mb-14 sm:mb-16 mt-6 sm:mt-12 uppercase text-left"
                    style={{
                        color: "#3b3b3b",
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Партнеры
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {partners.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`partner-card-desktop rounded-[19px] ${
                                logo.alt === "Партнер 2" ? "partner-2" : ""
                            } ${logo.alt === "Партнер 4" ? "partner-4" : ""} ${
                                logo.alt === "Партнер 7" ? "partner-7-bg" : ""
                            }`}
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
