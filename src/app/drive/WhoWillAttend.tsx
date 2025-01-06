import React from "react";

export default function WhoWillAttend() {
    const attendees = [
        {
            number: "01",
            text: "Начинающие мастера-потолочники",
        },
        {
            number: "02",
            text: "Продвинутые эксперты, мастера-профессионалы с опытом",
        },
        {
            number: "03",
            text: "Дизайнеры",
        },
        {
            number: "04",
            text: "Строители",
        },
        {
            number: "05",
            text: "Лидеры мнений из потолочной индустрии",
        },
        {
            number: "06",
            text: "Руководители строительных и монтажных организаций",
        },
    ];

    return (
        <div className="w-full px-5 max-w-[1350px] mx-auto bg-white from-white to-gray-100 py-20  ">
            {/* Заголовок */}
            <h2 className="section-title !mb-16">
                Кто будет на мероприятии?
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
    );
}
