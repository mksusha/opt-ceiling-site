import React from "react";

export default function DriveAcrossCountry() {
    const videos = [
        {
            city: "Санкт-Петербург",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239178&hd=2",
        },
        {
            city: "Москва",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239219&hd=2",
        },
        {
            city: "Чебоксары",
            iframe: "https://vk.com/video_ext.php?oid=-220635659&id=456239237&hd=2",
        },
    ];

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto py-16 sm:py-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-16 text-black">
                ДРАЙВ ШАГАЕТ ПО СТРАНЕ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="text-center">
                        <iframe
                            src={video.iframe}
                            width="100%"
                            height="300"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                            frameBorder="0"
                            allowFullScreen
                            title={video.city}
                            className="w-full rounded-lg"
                        ></iframe>
                        <h3 className="mt-2 text-lg sm:text-xl font-bold text-black">{video.city}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
