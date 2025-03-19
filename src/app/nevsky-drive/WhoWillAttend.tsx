import React from "react";

export default function WhoWillAttend() {
    const attendees = [
        {
            number: "01",
            text: "Начинающим мастерам-потолочникам",
        },
        {
            number: "02",
            text: "Продвинутым экспертам, мастерам-профессионалам",
        },
        {
            number: "03",
            text: "Дизайнерам",
        },
        {
            number: "04",
            text: "Строителям",
        },
        {
            number: "05",
            text: "Лидерам мнений из потолочной индустрии",
        },
        {
            number: "06",
            text: "Руководителям строительных и монтажных организаций",
        },
    ];

    return (
        <div className="w-full px-5 mx-auto bg-midGray  py-20">
            <div className=" w-auto m-auto max-w-[1350px] ">

                {/* Заголовок */}
                <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-10 sm:mb-16 md:mb-20 text-center">
                    КОМУ БУДЕТ ИНТЕРЕСНО?
                </h2>

                {/* Сетка */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {attendees.map((attendee, index) => (
                        <div key={index} className="attendee-card">
                            {/* Номер */}
                            <div className="attendee-number">
                                {attendee.number}
                            </div>

                            {/* Текст */}
                            <p className="attendee-text">
                                {attendee.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            );
            }