import React from "react";
import { MapPin } from "lucide-react";

const MeetingPlace = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 py-12 bg-gray-50 relative">
            {/* Заголовок и адрес */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-14">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
                    {/* Заголовок */}
                    <h3
                        className="font-semibold text-[32px] lg:text-[48px] uppercase text-left"
                        style={{
                            color: "#3b3b3b",
                            fontWeight: 600,
                            letterSpacing: "-0.05em",
                            textTransform: "uppercase",
                        }}
                    >
                        Место встречи
                    </h3>

                    {/* Адрес */}
                    <div className="flex items-center gap-2 mt-4 lg:mt-0 lg:ml-4">
                        {/* SVG только на десктопе слева от адреса */}
                        <MapPin
                            size={36}
                            className="hidden lg:inline"
                            color="#4a4a4a"
                        />
                        <p
                            style={{
                                fontFamily: "var(--third-family)",
                                fontWeight: 300,
                                fontSize: "20px",
                                color: "#4a4a4a",
                                margin: 0,
                            }}
                        >
                            проспект Максима Горького,
                            <span className="lg:inline hidden">
                                <br /> 2М, Чебоксары
                            </span>
                            <span className="lg:hidden"> 2М, Чебоксары</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Карта */}
            <div className="w-full max-w-[1350px] mx-auto h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=47.209981%2C56.149507&mode=whatshere&tab=inside&whatshere%5Bpoint%5D=47.209981%2C56.149506&whatshere%5Bzoom%5D=17&z=16"
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
