import React from "react";

export default function DriveAcrossCountry() {
    const items = [
        {
            city: "Санкт-Петербург 2024",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239178&hd=2",
        },
        {
            city: "Москва 2024",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239219&hd=2",
        },
        {
            city: "Чебоксары 2025",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239237&hd=2",
        },
        {
            city: "Санкт-Петербург 2025",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239309&hd=2",
        },
        {
            city: "Новосибирск 2025",
            iframe: "https://vkvideo.ru/video_ext.php?oid=-220635659&id=456239407&hd=2",
        },
        {
            city: "Москва 2025",
            registration: true, // оранжевая заглушка вместо видео
        },
    ];

    return (
        <div className="w-full px-6 sm:px-6 lg:px-8 max-w-[1350px] mx-auto py-16 sm:py-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-16 text-black">
                ДРАЙВ КОТОРЫЙ ОБЪЕДИНЯЕТ ГОРОДА
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="text-center">
                        {item.iframe ? (
                            <iframe
                                src={item.iframe}
                                width="100%"
                                height="300"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                                frameBorder="0"
                                allowFullScreen
                                title={item.city}
                                className="w-full rounded-2xl"
                            ></iframe>
                        ) : item.registration ? (
                            <a
                                href="#" // вставишь ссылку на Timepad
                                className="flex items-center justify-center w-full h-[300px] bg-[#FF551A] rounded-2xl text-white text-3xl font-bold hover:opacity-90 transition"
                            >
                                Регистрируйся
                            </a>
                        ) : null}
                        <h3 className="mt-2 text-lg sm:text-xl font-bold text-black">
                            {item.city}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
