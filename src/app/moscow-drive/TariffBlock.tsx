import React from "react";

export default function TariffBlock() {
    const prices = [
        { label: "до 30 сентября", price: "2500 ₽", main: true },
        { label: "с 1 октября", price: "3500 ₽" },
        { label: "с 1 ноября", price: "4500 ₽" },
    ];

    return (
        <div className="bg-[#0e0e0e] text-white py-24 px-6">
            <div className="mx-auto text-center">
                {/* Заголовок блока */}
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-6 text-white">
                    СТАНЬ ЧАСТЬЮ СОБЫТИЯ
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Регистрируйся на мероприятие и приводи друзей
                </p>

                {/* Карточка тарифа */}
                <div className="bg-white text-black rounded-3xl shadow-xl p-10 flex flex-col items-center max-w-2xl mx-auto">
                    {/* Заголовок внутри карточки */}
                    <h3 className="text-4xl md:text-5xl font-bold text-[#FF4606] mb-4">ЕДИНЫЙ</h3>
                    <p className="text-lg md:text-2xl text-gray-700 mb-6">по системе «ВСЁ ВКЛЮЧЕНО»</p>

                    {/* Цены */}
                    {prices.map((item, index) => (
                        <div key={index} className="mb-6">
                            <span
                                className={`block ${
                                    item.main
                                        ? "text-5xl md:text-6xl mt-2 mb-2 font-bold"
                                        : "text-2xl md:text-3xl mb-2  font-semibold text-gray-700"
                                }`}
                            >
                                {item.price}
                            </span>
                            <span className="block text-sm md:text-base text-gray-500">{item.label}</span>
                        </div>
                    ))}

                    {/* Кнопка */}
                    <a
                        href="https://optceiling.timepad.ru/event/3348038/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" inline-block bg-[#FF4606] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#e54305] transition"
                    >
                        Купить билет
                    </a>
                </div>
            </div>
        </div>
    );
}
