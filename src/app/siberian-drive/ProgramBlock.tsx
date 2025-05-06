import React from "react";

export default function ProgramBlock() {
    const programItems = [
        {
            time: "19 июля",
            description: "Драйв на максималках",
            subItems: [
                { description: "Знакомимся с новинками рынка от лидеров индустрии" },
                { description: "Изучаем стенды поставщиков и тестируем материалы" },
                { description: "Оттачиваем навыки на мастер-классах. Никакой воды — только практика и хардкор!" },
                { description: "В конце дня — розыгрыш офигенных призов!" },
            ],
        },
        {
            time: "20 июля",
            description: "Прокачка экспертизы и адреналин",
            subItems: [
                { description: "Расширенное обучение от FLEXYPRO, SWG KRAAB, ШТОК и ELFLED с именными сертификатами" },
                { description: "Командный турнир по пейнтболу — разряжаем обстановку и укрепляем нетворкинг" },
            ],
        },
        {
            time: "Оба дня",
            description: "Дополнительно",
            isAfterparty: true,
            subItems: [
                { description: "Open air, бассейн, баня, баскетбольно-волейбольная площадка" },
                { description: "Детская площадка, беседки с мангалом, пони-ферма" },
                { description: "Веревочный парк, прогулочные трассы в экозоне" },
                { description: "Два ресторана на территории экопарка" },
                { description: "Соревнования, призы, драйв — будет жарко!" },
            ],
        },
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
                                ? "bg-[#FF4606] text-white rounded-2xl"
                                : "text-[#3b3b3b] border-b border-[#dadada]"
                        }`}
                    >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                            <span className="font-bold mb-2 sm:mb-0">{item.time}</span>
                            <span className="font-light text-sm sm:text-base">{item.description}</span>
                        </div>

                        {item.subItems && (
                            <ul className={`list-disc list-inside space-y-3 my-2 ${
                                item.isAfterparty ? "text-white/80" : "text-black/50"
                            }`}>
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
