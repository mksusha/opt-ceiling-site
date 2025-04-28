import React from "react";

export default function PartnersSection() {
    // Данные
    const generalPartner = [
        { src: "/drive/Flexypro_logo_corrected_black_text.svg", alt: "Генеральный партнер" },
    ];

    const officialPartners = [
        { src: "/drive/s.png", alt: "Официальный партнер 1" },
        { src: "/drive/K.png", alt: "Официальный партнер 2" },
        { src: "/drive/ELFLED.png", alt: "Официальный партнер 3" },
        { src: "/drive/pro.png", alt: "Официальный партнер 4" },
    ];

    const partners = [
        { src: "/drive/avito.png", alt: "Партнер 2" },
        { src: "/drive/Копия DENKIRS_logo1.png", alt: "Партнер 2" },

        { src: "/drive/ШТОК лого.svg", alt: "Партнер 1" },
        { src: "/drive/U-line_логотип.svg", alt: "Партнер 3" },
        { src: "/drive/DL.png", alt: "Партнер 12" },
        { src: "/drive/D.png", alt: "Партнер 6" },
        { src: "/drive/RRRR.png", alt: "Партнер 7" },
        { src: "/drive/rondo.png", alt: "Партнер 2" },
        { src: "/drive/HS.png", alt: "Партнер 13" },
        { src: "/drive/Da.png", alt: "Партнер 9" },
        { src: "/drive/Ч.png", alt: "Партнер 16" },
        { src: "/drive/V.png", alt: "Партнер 10" },
        { src: "/drive/PQ.png", alt: "Партнер 11" },
        { src: "/drive/YOULED.png", alt: "Партнер 11" },
        { src: "/drive/lumistar.png", alt: "Партнер 11" },
        { src: "/drive/MSD1.png", alt: "Партнер 11" },
        { src: "/drive/вмбик.png", alt: "Партнер 11" },
        { src: "/drive/Lucisso.png", alt: "Партнер 11" },
        { src: "/drive/lux.png", alt: "Партнер 11" },
        { src: "/drive/sds.png", alt: "Партнер 11" },
        { src: "/drive/rexant.png", alt: "Партнер 11" },
        { src: "/drive/ST.png", alt: "Партнер 11" },


    ];

    return (
        <div className="w-full max-w-[1350px] mx-auto px-5 pt-10 bg-white">
            {/* Общий заголовок */}
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 md:mb-12 uppercase text-center">

                Наши партнёры
            </h2>

            {/* Генеральный партнер */}
            <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-black/70 mb-8 md:mb-16 uppercase text-center">
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
            <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-black/70 mb-8 md:mb-16 uppercase text-center">
                    Официальные партнёры
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {officialPartners.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="official-card rounded-[19px]"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Остальные партнёры */}
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-black/70 mb-8 md:mb-16 uppercase text-center">
                    Партнёры
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {partners.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`partner-card-desktop rounded-[19px] ${
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
