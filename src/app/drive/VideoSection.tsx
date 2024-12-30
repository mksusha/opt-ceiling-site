"use client";

import React from "react";

const VideoSection = () => {
    return (
        <div className="mt-16 px-8 py-8 max-w-[1350px] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-white text-5xl font-bold mb-12">Видео с предыдущих мероприятий</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Видео 1 */}
                <div className="relative w-full p-2 rounded-lg shadow-lg bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-20 blur-xl rounded-lg"></div>
                    <iframe
                        src="https://vk.com/video_ext.php?oid=-220635659&id=456239178&hd=2"
                        width="100%"
                        height="360"
                        className="relative z-10 rounded-md"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Видео 2 */}
                <div className="relative w-full p-2 rounded-lg shadow-lg bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-20 blur-xl rounded-lg"></div>
                    <iframe
                        src="https://vk.com/video_ext.php?oid=-220635659&id=456239219&hd=2"
                        width="100%"
                        height="360"
                        className="relative z-10 rounded-md"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
