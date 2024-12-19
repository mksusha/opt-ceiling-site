import React from "react";

import { useTranslation } from "react-i18next";

interface ImageFormats {
    thumbnail?: { url: string };
    small?: { url: string };
}

interface Exhibition {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    organizer: string;
    eventType: string;
    image?: {
        url: string;
        formats?: ImageFormats;
    };
    isCurrent: boolean; // Условие для отображения
}

const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
    const { t } = useTranslation(); // Подключение i18next

    const imageUrl =
        exhibition.image?.formats?.small?.url ||
        exhibition.image?.url ||
        "/default-placeholder.png";

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    return exhibition.isCurrent ? (


        // Карточка, если isCurrent = true
        <div className="card rounded-2xl shadow-lg overflow-hidden bg-white max-w-sm m-4 transition-shadow duration-500 hover:shadow-2xl">

            {imageUrl && (
                <img
                    src={imageUrl.startsWith("http") ? imageUrl : `http://localhost:1337${imageUrl}`}
                    alt={exhibition.title}
                    className="w-full h-44 object-cover"
                />
            )}

            {/* Контент */}
            <div className="p-5">
                {/* Тип мероприятия */}
                <span className="inline-block bg-lightGray text-darkGray uppercase font-medium text-sm px-3 py-1 rounded-lg mb-3">
                {exhibition.eventType}
            </span>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{exhibition.title}</h3>



                {/* Описание */}
                <p className="text-gray-600 mb-4">{exhibition.description}</p>

                {/* Даты */}
                <div className="flex items-center justify-start mb-4 space-x-2">
                <span className="bg-orange text-white font-semibold px-4 py-1 rounded-lg">
                    {formatDate(exhibition.startDate)}
                </span>
                    <span className="text-gray-600">-</span>
                    <span className="bg-orange text-white font-semibold px-4 py-1 rounded-lg">
                    {formatDate(exhibition.endDate)}
                </span>
                </div>

                {/* Организатор */}
                <p className="text-gray-600">
                    <strong>     {t("Организатор")}:</strong> {exhibition.organizer}
                </p>
            </div>
        </div>
    ) : (
        <div
            className="flex flex-col md:flex-row w-full bg-white rounded-3xl shadow-md transition-shadow duration-500 border border-b-8 hover:shadow-orange">

            {/* Левая часть с изображением и текстом */}
            <div className="flex flex-col md:flex-row w-full md:w-3/5 p-4">
                {imageUrl && (
                    <div className="w-full md:w-40 h-40 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                        <img
                            src={imageUrl.startsWith("http") ? imageUrl : `http://localhost:1337${imageUrl}`}
                            alt={exhibition.title}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                )}
                <div className="flex flex-col justify-center">
                    {/* Тип мероприятия */}
                    <div className="inline-flex">
    <span
        className="bg-lightGray text-gray-700 uppercase font-medium text-base px-2 py-0.5 rounded-lg mb-4">
        {exhibition.eventType}
    </span>
                    </div>


                    {/* Название */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {exhibition.title}
                    </h3>
                    {/* Описание */}
                    <p className="text-gray-600 text-lg">
                        {exhibition.description}
                    </p>
                </div>
            </div>

            {/* Правая часть с датами и организатором */}
            <div className="w-full md:w-1/3 flex flex-col justify-center p-4">
                <div className="flex flex-wrap items-center justify-start gap-2 mb-4">
                    <div className="bg-orange text-white px-4 py-1 rounded-md text-lg font-medium">
                        {formatDate(exhibition.startDate)}
                    </div>
                    <span className="text-gray-600">-</span>
                    <div className="bg-orange text-white px-4 py-1 rounded-md text-lg font-medium">
                        {formatDate(exhibition.endDate)}
                    </div>
                </div>
                {/* Организатор */}
                <p className="text-gray-700 text-lg md:text-base lg:text-lg">
                    <strong>{t("Организатор")}:</strong> {exhibition.organizer}
                </p>
            </div>
        </div>


    );
};

export default ExhibitionCard;
