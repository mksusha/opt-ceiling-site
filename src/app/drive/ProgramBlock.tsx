import React from "react";

export default function ProgramBlock() {
    const programItems = [
        { time: "10:00 – 11:00", description: "Регистрация участников" },
        { time: "11:00 – 15:00", description: "Презентация новинок, материалов и комплектующих" },
        { time: "15:00 – 19:00", description: "Посещение выставки, участие в мастер-классах и конкурсах" },
        { time: "19:00 – 22:00", description: "Afterparty", isAfterparty: true },
    ];

    return (
        <div className="bg-white px-5 max-w-[1350px] mx-auto py-10">
            {/* Заголовок */}
            <h2 className="font-semibold text-[32px] lg:text-[48px] uppercase text-[#3b3b3b] mb-12 text-left">
                Программа
            </h2>

            {/* Расписание */}
            <div className="flex flex-col w-full space-y-6">
                {programItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg ${
                            item.isAfterparty
                                ? "bg-[#FF4606] text-white rounded-lg"
                                : "text-[#3b3b3b] border-b border-[#dadada]"
                        }`}
                    >
                        <span className="font-bold mb-2 sm:mb-0">{item.time}</span>
                        <span className="font-light text-sm sm:text-base">{item.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
