'use client';

import * as React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/ui/carousel';
import { client } from '@/sanity/lib/client';

type SliderData = {
    images: {
        asset: {
            url: string;
        };
        alt?: string;
    }[];
};

const getSliderData = async (): Promise<SliderData | null> => {
    return client.fetch(`
    *[_type == "slider"][0] {
      images[]{
        asset->{
          url
        },
        alt
      }
    }
  `);
};

const MySlider: React.FC = () => {
    const [sliderData, setSliderData] = React.useState<SliderData | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getSliderData();
            setSliderData(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="w-full max-w-[1350px] mx-auto px-4">
                <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="h-64 bg-gray-200 rounded-lg animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        );
    }

    if (!sliderData) {
        return <p>Failed to load slider data.</p>;
    }

    return (
        <div className="w-full max-w-[1350px] mx-auto px-4">
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="relative w-full"
            >
                <CarouselContent>
                    {sliderData.images.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 p-2">
                            <div className="overflow-hidden rounded-lg relative">
                                <img
                                    src={image.asset.url}
                                    alt={image.alt || `Image ${index + 1}`}
                                    className="object-cover w-full h-full"
                                    loading="lazy" // Lazy-loading
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:-left-6 md:w-12 md:h-12 bg-white bg-opacity-60 rounded-full hover:bg-orange hover:bg-opacity-60 hover:text-white  hover:backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center" />
                <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:-right-6 md:w-12 md:h-12 bg-white bg-opacity-60 rounded-full hover:bg-orange hover:bg-opacity-60 hover:text-white hover:backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center" />
            </Carousel>
        </div>
    );
};

export default MySlider;
