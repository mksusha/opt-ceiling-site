import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";

export default function EventPhotosBlock() {
    // Массив фотографий с 7.jpg по 17.jpg
    const images = [
        "/drive/7.jpg",
        "/drive/8.jpg",
        "/drive/9.jpg",
        "/drive/10.jpg",
        "/drive/11.jpg",
        "/drive/12.jpg",

        "/drive/18.jpg",
        "/drive/19.jpg",
        "/drive/20.jpg",
        "/drive/13.jpg",
        "/drive/14.jpg",
        "/drive/15.jpg",
        "/drive/16.jpg",
        "/drive/17.jpg",
        "/drive/21.jpg",
        "/drive/22.jpg",
        "/drive/23.jpg",
    ];

    return (
        <div className="w-full max-w-[1350px] mx-auto px-5">
            {/* Заголовок */}
            <h2
                className="font-semibold text-[32px] lg:text-[48px]  mb-8 sm:mb-16 mt-6 sm:mt-12 uppercase text-left "
                style={{
                    color: "#3b3b3b",
                    fontWeight: 600,
                    letterSpacing: "-0.05em",
                    textTransform: "uppercase",
                }}
            >
                Фото с предыдущих мероприятий
            </h2>

            {/* Карусель */}
            <Carousel
                opts={{
                    align: "start",
                }}
                className="relative w-full"
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 p-2">
                            <div className="overflow-hidden rounded-lg relative">
                                <img
                                    src={image}
                                    alt={`Фото мероприятия ${index + 7}`}
                                    className="object-cover w-full h-[400px]"
                                    loading="lazy" // Lazy-loading для оптимизации
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:-left-6 md:w-12 md:h-12 bg-black bg-opacity-60 rounded-full hover:bg-orange hover:bg-opacity-60 hover:text-white hover:backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center" />
                <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:-right-6 md:w-12 md:h-12 bg-black bg-opacity-60 rounded-full hover:bg-orange hover:bg-opacity-60 hover:text-white hover:backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center" />
            </Carousel>
        </div>
    );
}
