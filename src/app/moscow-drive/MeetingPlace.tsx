"use client";

import React from "react";
import { MapPin } from "lucide-react";

const MeetingPlace = () => {
    return (
        <div className="px-4 my-12 sm:px-8 lg:px-16 py-16  bg-gray-50 relative">
            {/* Заголовок и адрес */}
            <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
                <h3 className="font-semibold text-[32px] lg:text-6xl text-black uppercase tracking-tight">
                    Место встречи
                </h3>

                <div className="flex justify-center">
                    <div className="flex items-start gap-3 mt-5 max-w-[1350px] text-left">
                        <MapPin size={32} color="#4a4a4a" className="min-w-[32px]" />
                        <div>
                            <p className="text-lg md:text-2xl text-[#4a4a4a] leading-snug">
                                <strong>Москва, 3-я ул. Ямского поля, д. 2 к5А</strong>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Карта */}
            <div className="w-full max-w-[1350px] mx-auto h-[320px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
                <div
                    className="w-full max-w-[1350px] mx-auto h-[320px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.582619%2C55.783884&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc0MDkyNxJL0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDMt0Y8g0YPQu9C40YbQsCDQr9C80YHQutC-0LPQviDQn9C-0LvRjywgMtC6NdCQIgoNmlQWQhWyIl9C&z=17.06"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="Москва, 3-я ул. Ямского поля, д. 2 к5А"
                        style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />
                </div>


            </div>
        </div>
    );
};

export default MeetingPlace;
