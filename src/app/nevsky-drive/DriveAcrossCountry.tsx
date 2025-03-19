import React from "react";

export default function DriveAcrossCountry() {
    const videos = [
        {
            city: "Санкт-Петербург",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239178&hd=2",
            vk: "https://vk.com/video-220635659_456239178",
            rutube: "https://rutube.ru/video/add49a320856c8ba09c202ebc3dfff89/?r=wd",
            dzen: "https://dzen.ru/video/watch/66fe399f5c5e4f1cf4156492?share_to=link",
        },
        {
            city: "Москва",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239219&hd=2",
            vk: "https://vkvideo.ru/video-220635659_456239219",
            rutube: "https://rutube.ru/video/d14149cb3832c7d976435ab292a9c726/?r=wd",
            dzen: "https://dzen.ru/video/watch/676ed2a684d2f06de1cc9698",
        },
        {
            city: "Чебоксары",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239237&hd=2",
            vk: "https://vkvideo.ru/video-220635659_456239237",
            rutube: "https://rutube.ru/video/028f3a6955cfdc87213c9d5fc196330b/?r=wd",
            dzen: "https://dzen.ru/video/watch/67c5503ab1ed290cbded933b?share_to=link",
        },
    ];

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto bg-gray-100 py-16 sm:py-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-16 text-black">
                ДРАЙВ ШАГАЕТ ПО СТРАНЕ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-10 gap-x-4 sm:gap-x-6">
                {videos.map((video, index) => (
                    <div key={index} className="video-card text-center bg-white p-3 sm:p-4 rounded-2xl shadow-md max-w-xs sm:max-w-sm mx-auto">
                        <h3 className="city-name mb-3 sm:mb-4 text-base sm:text-xl font-bold text-black">{video.city}</h3>
                        <iframe
                            src={video.iframe}
                            width="100%"
                            height="200"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                            frameBorder="0"
                            allowFullScreen
                            title={video.city}
                            className="w-full mb-3 sm:mb-4 rounded-lg"
                        ></iframe>
                        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 max-w-[1350px] mx-auto">
                            <a href={video.vk} target="_blank" rel="noopener noreferrer" className="w-24 sm:w-32 px-3 py-2 bg-[#FF551A] text-white text-center rounded-lg shadow-md hover:bg-orange-700 transition text-sm sm:text-base">
                                ВК
                            </a>
                            <a href={video.dzen} target="_blank" rel="noopener noreferrer" className="w-24 sm:w-32 px-3 py-2 bg-[#FF551A] text-white text-center rounded-lg shadow-md hover:bg-orange-700 transition text-sm sm:text-base">
                                Дзен
                            </a>
                            <a href={video.rutube} target="_blank" rel="noopener noreferrer" className="w-24 sm:w-32 px-3 py-2 bg-[#FF551A] text-white text-center rounded-lg shadow-md hover:bg-orange-700 transition text-sm sm:text-base">
                                Рутуб
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}