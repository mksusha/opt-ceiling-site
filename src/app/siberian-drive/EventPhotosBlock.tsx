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
        "/drive/nev1.jpg",
        "/drive/nev2.jpg",
        "/drive/nev3.jpg",
        "/drive/nev4.jpg",
        "/drive/20.jpg",
        "/drive/19.jpg",

        "/drive/14.jpg",
        "/drive/15.jpg",

        "/drive/16.jpg",
        "/drive/17.jpg",

    ];

    return (
        <div className="w-full bg-midGray py-20 mx-auto px-5">
            <div className="w-full max-w-[1350px] mx-auto px-5">

                <h2
                    className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 sm:mb-16 uppercase text-center"
                    style={{
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    ФОТОГАЛЕРЕЯ ДРАЙВА                </h2>

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
                                <div className="overflow-hidden rounded-xl relative">
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
                    <CarouselPrevious
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:-left-6 md:w-12 md:h-12 bg-black bg-opacity-60 rounded-full hover:bg-orange hover:bg-opacity-60 hover:text-white hover:backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center"/>
                    <CarouselNext
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:-right-6 md:w-12 md:h-12 bg-black bg-opacity-60 rounded-full hover:bg-orange hover:bg-opacity-60 hover:text-white hover:backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center"/>
                </Carousel>
            </div>
        </div>
    );
}
