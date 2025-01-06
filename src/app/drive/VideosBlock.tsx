import React from "react";

export default function VideosBlock() {
    const videos = [
        {
            src: "https://vk.com/video_ext.php?oid=-220635659&id=456239178&hd=2",
            title: "НЕВСКИЙ ДРАЙВ",
        },
        {
            src: "https://vk.com/video_ext.php?oid=-220635659&id=456239219&hd=2",
            title: "МОСКОВСКИЙ ДРАЙВ",
        },
    ];

    return (
        <div className="bg-white px-5 max-w-[1350px] mx-auto py-10">
            {/* Заголовок */}
            <h2 className="font-semibold text-[32px] lg:text-[48px] uppercase text-[#3b3b3b] mb-10 text-left">
                Видео с предыдущих мероприятий
            </h2>

            {/* Видео */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <iframe
                            src={video.src}
                            width="100%"
                            height="315"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-md"
                        ></iframe>
                        <p className="font-medium text-lg text-[#3b3b3b] mt-4 text-center">
                            {video.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
