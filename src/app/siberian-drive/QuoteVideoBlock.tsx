import React from "react";

export default function VideoBlock() {
    return (
        <div className="bg-[#FF551A] text-white py-20 px-6 md:py-32">
            {/* Контейнер */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">
                {/* Левый блок с текстом */}
                <div
                    className="flex-1 max-w-lg bg-[#232323]/50 rounded-3xl p-6 md:p-8 flex items-center h-auto md:h-[395px]">
                    <blockquote
                        className="text-2xl md:text-4xl font-bold leading-snug text-white text-center md:text-left">
                        “Мы создаем площадку для развития профессионального сообщества и даем доступ к знаниям,
                        которые нельзя получить в интернете.”
                    </blockquote>
                </div>

                {/* Правый блок с видео и кнопками */}
                <div className="flex-1 max-w-lg w-full">
                    {/* Встроенное видео (Дзен) */}
                    <div
                        className="relative w-full h-[250px] md:h-[385px] bg-black rounded-3xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://dzen.ru/embed/vI-NR7B1Valg?from_block=partner&from=zen&mute=0&autoplay=0&tv=0"
                            allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
                            data-testid="embed-iframe"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                        ></iframe>
                    </div>


                </div>
            </div>
        </div>
    );
}
