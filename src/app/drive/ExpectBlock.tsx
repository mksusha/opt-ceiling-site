import React from "react";

export default function ExpectBlock() {
    const items = [
        {
            image: "/drive/1.svg",
            text: (
                <>
                    Выступление спикеров<br />по актуальным темам
                </>
            ),
        },
        {
            image: "/drive/2.svg",
            text: (
                <>
                    Презентация новинок<br />на рынке натяжных потолков
                </>
            ),
        },
        {
            image: "/drive/3.svg",
            text: (
                <>
                    Выставка стендов<br />поставщиков
                </>
            ),
        },
        {
            image: "/drive/4.svg",
            text: (
                <>
                    Практические<br />мастер-классы
                </>
            ),
        },
        {
            image: "/drive/5.svg",
            text: <>Розыгрыш подарков</>,
        },
        {
            image: "/drive/6.svg",
            text: <>Afterparty</>,
        },
    ];

    return (
        <div className="w-full max-w-[1350px] mx-auto px-5 pt-10 sm:pt-20 bg-white">
            {/* Заголовок */}
            <h2
                className="font-semibold text-[32px] lg:text-[48px] sm:text-4xl mb-8 sm:mb-16 mt-6 sm:mt-12 uppercase text-left sm:px-0"
                style={{
                    color: "var(--title-color)",
                }}
            >
                Вас ждет
            </h2>

            {/* Сетка */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-[60px] sm:gap-x-16 lg:gap-x-[200px] px-4 sm:px-0"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center sm:items-start text-center sm:text-left"
                    >
                        {/* Квадрат с SVG */}
                        <div
                            className="flex items-center justify-center rounded-[10px] w-[67px] h-[67px] mb-4 sm:mb-[50px]"
                            style={{
                                backgroundColor: "var(--icon-bg)",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={`Icon ${index + 1}`}
                                className="w-[40px] h-[40px]"
                            />
                        </div>

                        {/* Текст */}
                        <p
                            className="font-light text-sm sm:text-lg leading-[1.5]"
                            style={{
                                color: "var(--text-color)",
                                maxWidth: "304px",
                            }}
                        >
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
