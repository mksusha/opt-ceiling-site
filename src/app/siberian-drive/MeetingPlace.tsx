"use client";

import React from "react";
import { MapPin } from "lucide-react";

const MeetingPlace = () => {
    return (
        <div className="px-4 mt-12 sm:px-8 lg:px-16 py-12 bg-gray-50 relative">
            {/* Заголовок и адрес */}
            <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
                <h3 className="font-semibold text-[32px] lg:text-6xl text-black uppercase tracking-tight">
                    Место встречи
                </h3>

                <div className="flex justify-center">
                    <div className="flex items-start gap-3 mt-5 max-w-[1350px] text-left">
                        <MapPin size={52} color="#4a4a4a" className="min-w-[32px]"/>
                        <div>
                            <p className="text-lg md:text-xl text-[#4a4a4a] leading-snug">
                                Живописная территория в экологически чистом месте —
                                <strong> Экопарк «Чкаловские дачи»</strong>
                            </p>
                            <p className="text-md text-[#4a4a4a] mt-1">
                                Новосибирский район, Мочищенский сельсовет, дачный посёлок Мочище

                                мкр-н Дом отдыха «Мочище», дом 4
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Карта */}
            <div className="w-full max-w-[1350px] mx-auto h-[320px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=82.835664%2C55.122797&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NjIyNTQxMDMzEsIB0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC60LjQuSDRgNCw0LnQvtC9LCDQnNC-0YfQuNGJ0LXQvdGB0LrQuNC5INGB0LXQu9GM0YHQvtCy0LXRgiwg0LTQsNGH0L3Ri9C5INC_0L7RgdGR0LvQvtC6INCc0L7Rh9C40YnQtSwg0LzQuNC60YDQvtGA0LDQudC-0L0g0JTQvtC8INC-0YLQtNGL0YXQsCDQnNC-0YfQuNGJ0LUsIDQiCg3dq6VCFb59XEI%2C&source=mapframe&utm_source=mapframe&z=17.06"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Экопарк Чкаловские дачи"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                />
            </div>
        </div>
    );
};

export default MeetingPlace;
