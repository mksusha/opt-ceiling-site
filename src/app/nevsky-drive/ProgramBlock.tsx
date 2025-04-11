import React from "react";

export default function ProgramBlock() {
    const programItems = [
        { time: "10:00 – 11:00", description: "Регистрация участников" },
        {
            time: "11:00 – 14:00",
            description: "Форумная часть",
            subItems: [
                { description: "Презентация многофункциональных продуктов от ведущих брендов рынка натяжных потолков" },
                { description: "Как получать целевых клиентов на Авито Услугах. Спикер Анна Пастернацкая,  Авито" },
            ],
        },
        { time: "14:00 – 15:00", description: "Обед “Шведский стол”" },
        { time: "15:00 – 18:00", description: "Открытие выставки, участие в мастер-классах и конкурсах" },
        { time: "18:00 – 22:00", description: "Afterparty", isAfterparty: true },
    ];

    return (
        <div className="bg-white px-5 max-w-[1350px] mx-auto py-20">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 md:mb-12 uppercase text-center">
                Программа
            </h2>

            <div className="flex flex-col w-full space-y-6">
                {programItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg ${
                            item.isAfterparty
                                ? "bg-[#FF4606] text-white rounded-lg"
                                : "text-[#3b3b3b] border-b border-[#dadada]"
                        }`}
                    >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                            <span className="font-bold mb-2 sm:mb-0">{item.time}</span>
                            <span className="font-light text-sm sm:text-base">{item.description}</span>
                        </div>

                        {item.subItems && (
                            <ul className=" list-disc list-inside text-sm sm:text-lg text-black/50 space-y-3 my-5">
                                {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem.description}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
