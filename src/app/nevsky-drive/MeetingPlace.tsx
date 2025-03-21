import React from "react";
import { MapPin } from "lucide-react";

const MeetingPlace = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 py-12 bg-gray-50 relative">
            {/* Заголовок и адрес */}
            <div className="flex flex-col items-center text-center mb-8 sm:mb-14">
                {/* Заголовок */}
                <h3
                    className="font-semibold text-[32px] text-black lg:text-7xl uppercase"
                    style={{

                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Место встречи
                </h3>

                {/* Адрес */}
                <div className="flex items-center gap-2 mt-4">
                    <MapPin size={36} color="#4a4a4a" />
                    <p
                        style={{
                            fontFamily: "var(--third-family)",
                            fontWeight: 300,
                            fontSize: "20px",
                            color: "#4a4a4a",
                            margin: 0,
                            textAlign: "left",
                        }}
                    >
                        Лермонтовский проспект, 43/1, Санкт-Петербург
                    </p>
                </div>
            </div>

            {/* Карта */}
            <div className="w-full max-w-[1350px] mx-auto h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=30.296653%2C59.914602&mode=search&oid=1016773286&ol=biz&z=17"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Место встречи"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                ></iframe>
            </div>
        </div>
    );
};

export default MeetingPlace;
