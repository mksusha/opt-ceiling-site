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
        prices: [
            "3 300 ₽",
            "с 1 июня: 4 300 ₽",
            "с 1 июля: 5 300 ₽"
        ],
    },
    {
        title: "ПОЛНЫЙ ХАРДКОР",
        notice: "Продажа приостановлена. Откроем скоро – оставайтесь на связи!",
        description: [
            "Доступ на два дня (19–20 июля)",
            "Посещение выставки поставщиков",
            "Участие в мастер-классах и конкурсах",
            "Afterparty с розыгрышем призов",
            "Расширенное обучение во второй день",
            "Именной сертификат",
        ],
        prices: [
            "5 300 ₽",
            "с 1 июня: 6 300 ₽",
            "с 1 июля: 7 300 ₽"
        ],
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
        prices: [
            "5 700 ₽",
            "с 1 июня: 6 700 ₽",
            "с 1 июля: 7 700 ₽"
        ],
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
                        <div key={index} className="bg-white text-black rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold uppercase text-center text-[#FF4606] mb-2">{tariff.title}</h3>
                                {tariff.subtitle && (
                                    <p className="text-center text-sm mb-2 text-gray-600">{tariff.subtitle}</p>
                                )}
                                {tariff.notice && (
                                    <p className="text-sm text-red-600 text-center mb-4">{tariff.notice}</p>
                                )}
                                <ul className="text-base text-left space-y-2 mb-6">
                                    {tariff.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-gray-900 mb-2">
                                    {tariff.prices.map((price, i) => (
                                        <div key={i} className={i > 0 ? "text-sm font-normal italic" : ""}>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
