import React from "react";

export default function TariffBlock() {
    const pricesMain = [
        { label: "до 30 сентября", price: "2000 ₽", main: true },
        { label: "с 1 октября", price: "2500 ₽" },
        { label: "с 1 ноября", price: "3000 ₽" },
    ];

    const afterpartyItems = [
        "DJ",
        "ужин «Шведский стол»",
        "кавер-группа",
        "конкурсы",
        "розыгрыши",
    ];

    return (
        <div className="bg-[#0e0e0e] text-white py-24 px-6">
            <div className="mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-6 text-white">
                    СТАНЬ ЧАСТЬЮ СОБЫТИЯ
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                    Регистрируйся на мероприятие и приводи друзей
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                    {/* ЕДИНЫЙ */}
                    <div className="bg-white text-black rounded-3xl shadow-xl p-10 flex flex-col items-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#FF4606] mb-4">ЕДИНЫЙ</h3>
                        <p className="text-lg md:text-2xl text-gray-700 mb-6">по системе «ВСЁ ВКЛЮЧЕНО»</p>

                        {pricesMain.map((item, index) => (
                            <div key={index} className="mb-6">
                                <span
                                    className={`block ${
                                        item.main
                                            ? "text-5xl md:text-6xl mt-2 mb-2 font-bold"
                                            : "text-2xl md:text-3xl mb-2 font-semibold text-gray-700"
                                    }`}
                                >
                                    {item.price}
                                </span>
                                <span className="block text-sm md:text-base text-gray-500">{item.label}</span>
                            </div>
                        ))}

                        <div className="mt-auto">
                            <a
                                href="https://optceilingdrive.timepad.ru/event/3575510/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#FF4606] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54305] transition"
                            >
                                Купить билет
                            </a>
                        </div>
                    </div>

                    {/* AFTERPARTY */}
                    <div className="bg-white text-black rounded-3xl shadow-xl p-10 flex flex-col items-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#FF4606] mb-6">AFTERPARTY</h3>

                        {/* Список преимуществ */}
                        <ul className="text-lg md:text-2xl text-gray-700 mb-8 space-y-3 text-left">
                            {afterpartyItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-[#FF4606] font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Цена */}
                        <div className="mb-8">
                            <span className="block text-5xl md:text-6xl font-bold">3000 ₽</span>
                        </div>

                        <div className="mt-auto">
                            <a
                                href="https://optceilingdrive.timepad.ru/event/3575510/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#FF4606] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54305] transition"
                            >
                                Купить билет
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
