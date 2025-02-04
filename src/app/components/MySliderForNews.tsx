'use client';

import React, { useState } from "react";

interface MySliderForNewsProps {
    gallery: {
        asset: {
            url: string;
        };
    }[];
    coverImageUrl: string;
}

const MySliderForNews: React.FC<MySliderForNewsProps> = ({ gallery, coverImageUrl }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [{ asset: { url: coverImageUrl } }, ...gallery];

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="w-full relative">
            <div className="relative mb-6">
                <img
                    src={images[currentImageIndex].asset.url}
                    alt={`Current image ${currentImageIndex + 1}`}
                    className="lg:max-w-[800px] lg:h-[600px] mx-auto rounded-lg shadow-lg object-cover max-w-[340px] h-[400px] "
                />
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-orange hover:bg-opacity-80 hover:text-white text-black font-bold w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-orange hover:bg-opacity-80 hover:text-white text-black font-bold w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                >
                    →
                </button>
            </div>
            <div className="flex gap-2 justify-center overflow-x-auto">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`border-2 ${
                            currentImageIndex === index
                                ? "border-orange-500"
                                : "border-gray-300"
                        } rounded-lg overflow-hidden w-20 h-20 flex-shrink-0`}
                    >
                        <img
                            src={image.asset.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MySliderForNews;
