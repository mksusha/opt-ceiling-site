import React, { useEffect } from "react";
import {  urlFor} from "@/sanity/lib/client";
interface Exhibition {
    id: string;
    title: string;
    title_en?: string;
    description?: string;
    description_en?: string;
    startDate: string;
    endDate?: string;
    time?: string;
    time_en?: string;
    organizer?: string;
    organizer_en?: string;
    organizer2?: string;
    organizer2_en?: string;
    partner?: string;
    partner_en?: string;
    phoneNumber?: string;
    website?: string;
    eventType: string;
    eventType_en: string;
    location?: string;
    location_en?: string;
    mapCode?: string;
    invitationLink?: string;
    recording?: string;
    videoList?: string[];
    photoList?: { asset: { _ref: string } }[];    theme?: string[];
    theme_en?: string[];
    banner?: string | null;

    image?: string;
    video?: string; // Добавлено свойство video
    redirectButton?: string; // Добавлено свойство redirectButton
    slider?: { asset: { _ref: string } }[]; // Добавлено поле slider
}


interface ExhibitionDetailsProps {
    exhibition: Exhibition;
    formatDate: (date: string) => string;
    t: (key: string) => string;
    language: string;
}

const ExhibitionDetails: React.FC<ExhibitionDetailsProps> = ({
                                                                 exhibition,
                                                                 formatDate,
                                                                 t,
                                                                 language,
                                                             }) => {
    const {
        title,
        title_en,
        description,
        description_en,
        startDate,
        endDate,
        time,
        time_en,
        organizer,
        organizer_en,
        organizer2,
        organizer2_en,
        partner,
        partner_en,
        phoneNumber,
        website,
        eventType,
        eventType_en,
        location,
        location_en,
        mapCode,
        recording,
        video,
        slider = [],
        redirectButton,
        image,
        banner,
        videoList = [],
        photoList = []
    } = exhibition;

    const imageUrl = typeof image === "string" ? image : null;


    // Локализованные значения
    const localizedTime = language === "en" && time_en ? time_en : time;
    const localizedLocation = language === "en" && location_en ? location_en : location;
    const localizedDescription =
        language === "en" && description_en
            ? description_en
            : description || t("Описание отсутствует.");
    const localizedEventType = language === "en" ? eventType_en : eventType;
    const localizedOrganizer2 =
        language === "en" && organizer2_en ? organizer2_en : organizer2;
    const localizedPartner =
        language === "en" && partner_en ? partner_en : partner;
    const bannerUrl = banner;

    useEffect(() => {
        if (mapCode) {
            const script = document.createElement("script");
            script.src =
                "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1c7f53ff940713d5384d8253c04e41bcd1d4802b6444bf5cae34c130a5c41bf4&width=100%25&height=400&lang=ru_RU&scroll=true";
            script.async = true;
            script.charset = "utf-8";
            document.getElementById("map-container")?.appendChild(script);
        }
    }, [mapCode]);

    return (
        <div className="container max-w-[1350px] mx-auto h-auto p-4 sm:p-6">
            {/* Верхний блок с логотипом, названием, описанием и датой */}
            <div
                className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden mt-8 mb-12"
                style={{
                    backgroundImage: bannerUrl ? `url(${bannerUrl})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {imageUrl && (
                    <div className="flex-shrink-0 border border-gray-300 p-2 sm:p-4 rounded-lg m-2 sm:m-4 bg-white bg-opacity-80">
                        <div className="lg:h-28 mx-auto flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={title || "Exhibition Logo"}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                )}
                <div className="flex-grow p-4 bg-white bg-opacity-80 flex flex-col justify-between text-center lg:text-left">
                    <div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-gray-800">
                            {language === "en"
                                ? title_en || title || t("Без названия")
                                : title || t("Без названия")}
                        </h1>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            {localizedDescription}
                        </p>
                    </div>
                    <div className="mt-auto">
                        {organizer && (
                            <p className="text-gray-600 text-sm sm:text-base">
                                <strong>{t("Организатор")}: </strong>
                                {language === "en" ? organizer_en || organizer : organizer}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex-shrink-0 p-4 text-center lg:text-right bg-white bg-opacity-80 flex flex-col justify-between">
                    <div className="mb-4">
                        <strong className="block text-gray-800 text-sm sm:text-base">
                            {t("Дата проведения")}: {" "}
                        </strong>
                        <span className="text-gray-600 text-sm sm:text-base">
                            {startDate} {endDate && `- ${endDate}`}
                        </span>
                    </div>
                    {localizedTime && (
                        <div className="mt-auto">
                            <strong className="block text-gray-800 text-sm sm:text-base">
                                {t("Время")}: {" "}
                            </strong>
                            <span className="text-gray-600 text-sm sm:text-base">
                                {localizedTime}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Нижний блок со всеми остальными данными */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                {localizedEventType && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Тип события")}: </strong>
                        {localizedEventType}
                    </div>
                )}
                {localizedOrganizer2 && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Соорганизатор")}: </strong>
                        {localizedOrganizer2}
                    </div>
                )}
                {localizedPartner && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Партнер")}: </strong>
                        {localizedPartner}
                    </div>
                )}
                {phoneNumber && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Телефон")}: </strong>
                        {phoneNumber}
                    </div>
                )}
                {website && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Сайт")}: </strong>
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            {website}
                        </a>
                    </div>
                )}
                {mapCode && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Карта")}: </strong>
                        <div
                            id="map-container"
                            className="w-full h-64 border rounded-lg overflow-hidden"
                            style={{maxHeight: "400px", minHeight: "300px"}}
                        ></div>
                    </div>
                )}
                {localizedLocation && (
                    <div className="mb-4">
                        <strong className="text-sm sm:text-base">{t("Место проведения")}: </strong>
                        {localizedLocation}
                    </div>
                )}
                <div className="mb-4">
                    <strong className="text-sm sm:text-base">{t("Тема")}: </strong>
                    <ul className="list-disc list-inside">
                        {(language === "en"
                                ? exhibition.theme_en || []
                                : exhibition.theme || []
                        ).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                {recording && (
                    <div className="mb-4">
                        <a
                            href={recording}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            {t("Запись мероприятия")}
                        </a>
                    </div>
                )}
                {/* Проверка типа мероприятия */}
                {(localizedEventType === "Мастер-класс" || localizedEventType === "Масштабное мероприятие" ||
                    localizedEventType === "Masterclass" || localizedEventType === "Large-scale") && (
                    <>
                        {/* Фотографии */}
                        <div className="mb-4">
                            <strong className="text-sm sm:text-base">{t("Фотографии")}:</strong>
                            {photoList && photoList.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                    {photoList.map((photo, index) => {
                                        const imageUrl = photo?.asset
                                            ? urlFor(photo)
                                                .width(800)
                                                .height(800)
                                                .fit('crop')
                                                .quality(100)
                                                .dpr(2) // Для Retina-экранов
                                                .url()
                                            : null;

                                        return imageUrl ? (
                                            <img
                                                key={index}
                                                src={imageUrl}
                                                alt={`${t("Фото")} ${index + 1}`}
                                                className="w-full h-full object-cover rounded-lg shadow-md"
                                            />
                                        ) : (
                                            <p key={index} className="text-red-500">{t("Некорректное фото")}</p>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="text-gray-500 mt-2">{t("Будут доступны после мероприятия.")}</p>
                            )}
                        </div>



                        {/* Видео */}
                        <div className="mb-4">
                            <strong className="text-sm sm:text-base">{t("Видео")}:</strong>
                            {videoList && videoList.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                                    {videoList.map((video, index) => {
                                        // Создание временного контейнера для извлечения данных из iframe
                                        const tempDiv = document.createElement("div");
                                        tempDiv.innerHTML = video;
                                        const iframe = tempDiv.querySelector("iframe");
                                        const videoSrc = iframe?.src || "#";

                                        return (
                                            <div
                                                key={index}
                                                className="relative w-full mx-auto rounded-lg overflow-hidden shadow-lg"
                                                style={{
                                                    maxWidth: "700px", // Увеличенная максимальная ширина
                                                }}
                                            >
                                                {/* Контейнер для сохранения пропорций */}
                                                <div className="relative" style={{ paddingTop: "56.25%" }}>
                                                    <iframe
                                                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                                                        src={videoSrc}
                                                        frameBorder="0"
                                                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="text-gray-500 mt-2">{t("Будут доступны после мероприятия.")}</p>
                            )}
                        </div>

                    </>
                )}

                {(localizedEventType === "Вебинар" || localizedEventType === "Webinar") && (
                    <>
                        {/* Только видео */}
                        <div className="mb-4">
                            <strong className="text-sm sm:text-base">{t("Запись вебинара")}:</strong>
                            {videoList && videoList.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                                    {videoList.map((video, index) => {
                                        // Создание временного контейнера для извлечения данных из iframe
                                        const tempDiv = document.createElement("div");
                                        tempDiv.innerHTML = video;
                                        const iframe = tempDiv.querySelector("iframe");
                                        const videoSrc = iframe?.src || "#";

                                        return (
                                            <div
                                                key={index}
                                                className="relative w-full mx-auto rounded-lg overflow-hidden shadow-lg"
                                                style={{
                                                    maxWidth: "700px", // Увеличенная максимальная ширина
                                                }}
                                            >
                                                {/* Контейнер для сохранения пропорций */}
                                                <div className="relative" style={{ paddingTop: "56.25%" }}>
                                                    <iframe
                                                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                                                        src={videoSrc}
                                                        frameBorder="0"
                                                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="text-gray-500 mt-2">{t("Запись вебинара будет доступна после мероприятия.")}</p>
                            )}
                        </div>
                    </>
                )}


                {/* Если ни один из типов мероприятия не подходит */}
                {!(localizedEventType === "Мастер-класс" || localizedEventType === "Масштабное мероприятие" ||
                    localizedEventType === "Masterclass" || localizedEventType === "Large-scale" ||
                    localizedEventType === "Вебинар" || localizedEventType === "Webinar") && (
                    <p>{t("Материалы мероприятия будут добавлены после мероприятия.")}</p>
                )}




                {redirectButton && (
                    <div className="mb-4">
                        <a
                            href={redirectButton}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-accent"
                        >
                            {t("Перейти на сайт мероприятия")}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExhibitionDetails;
