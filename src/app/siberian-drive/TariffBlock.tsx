import React from "react";

const tariffs = [
    {
        title: "БАЗОВЫЙ",
        description: [
            "Доступ на 1 день (19 июля)",
            "Посещение выставки поставщиков",
            "Участие в мастер-классах и конкурсах",
            "Afterparty с розыгрышем призов",
            <del key="del1">Расширенное обучение во второй день</del>,
            <del key="del2">Именной сертификат</del>,
        ],
        prices: ["4 300 ₽"],
    },
    {
        title: "ПОЛНЫЙ ХАРДКОР",
        description: [
            "Доступ на два дня (19–20 июля)",
            "Посещение выставки поставщиков",
            "Участие в мастер-классах и конкурсах",
            "Afterparty с розыгрышем призов",
            "Расширенное обучение во второй день",
            "Именной сертификат",
        ],
        prices: ["6 300 ₽"],
    },
    {
        title: "СЕМЕЙНЫЙ",
        subtitle: "2 взрослых + 1 ребёнок до 14 лет",
        description: [
            "Доступ на 1 день (19 июля)",
            "Посещение выставки поставщиков",
            "Участие в мастер-классах и конкурсах",
            "Afterparty с розыгрышем призов",
        ],
        prices: ["6 700 ₽"],
    },
    {
        title: "ТУРНИР ПО ПЕЙНТБОЛУ 20.07",
        description: [
            "Аренда снаряжения (маска, маркер, перчатки, камуфляж, жилет)",
            "Инструктаж по технике безопасности",
            "Открытая площадка для игры",
            "Смотровая зона для болельщиков",
            "Помещение для вещей",
        ],
        prices: ["2 500 ₽"],
    },
];

export default function TariffBlock() {
    return (
        <div className="bg-[#0e0e0e] text-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-4 text-white">
                    Тарифы
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                    Стань частью события! Регистрируйся и приводи друзей.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tariffs.map((tariff, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-2xl p-6 shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold uppercase text-center text-[#FF4606] mb-2">
                                    {tariff.title}
                                </h3>
                                {tariff.subtitle && (
                                    <p className="text-center text-sm mb-2 text-gray-600">
                                        {tariff.subtitle}
                                    </p>
                                )}
                                <ul className="text-base text-left space-y-2 mb-6">
                                    {tariff.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                {tariff.title === "ПОЛНЫЙ ХАРДКОР" ? (
                                    <div className="mt-4 inline-flex items-center justify-center bg-red-100 text-red-700 text-sm font-semibold px-4 py-3 rounded-full shadow-inner">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Все билеты проданы
                                    </div>
                                ) : (
                                    <>
                                        <div className="text-xl font-bold text-gray-900 mb-2">
                                            {tariff.prices.map((price, i) => (
                                                <div
                                                    key={i}
                                                    className={i > 0 ? "text-sm font-normal italic" : ""}
                                                >
                                                    {price}
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href="https://optceiling.timepad.ru/event/3348038/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 bg-[#FF4606] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e54305] transition"
                                        >
                                            Купить билет
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
