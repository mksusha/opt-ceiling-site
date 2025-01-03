import React, { useEffect } from "react";

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
    location?: string;
    location_en?: string;
    mapCode?: string;
    invitationLink?: string;
    recording?: string;
    video?: string;
    slider?: { _type: "image"; asset: { _ref: string } }[];
    redirectButton?: string;
    theme?: string;
    theme_en?: string;
    banner?: { asset: { _ref: string } };
    image?: string | { asset: { _ref: string } };
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
        location,
        location_en,
        mapCode,
        recording,
        video,
        slider = [],
        redirectButton,
        image,
    } = exhibition;

    const imageUrl = typeof image === "string" ? image : image?.asset?._ref;

    const localizedTime = language === "en" ? time_en : time;
    const localizedLocation = language === "en" ? location_en : location;
    const localizedDescription = language === "en" && description_en
        ? description_en
        : description || t("Описание отсутствует.");

    const localizedOrganizer2 = language === "en" && organizer2_en
        ? organizer2_en
        : organizer2;

    const localizedPartner = language === "en" && partner_en
        ? partner_en
        : partner;


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
    console.log(exhibition);
    console.log("Description EN:", description_en);
    console.log("Organizer2 EN:", organizer2_en);
    console.log("Partner EN:", partner_en);

    return (
        <div className="container max-w-[1350px] mx-auto h-auto p-6">
            {/* Верхний блок с логотипом, названием, описанием и датой */}
            <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                {/* Лого с обводкой */}
                {imageUrl && (
                    <div className="flex-shrink-0 border border-gray-300 p-4 rounded-lg m-4">
                        <img
                            src={imageUrl}
                            alt={title || "Exhibition Logo"}
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                )}

                {/* Центральный блок с названием и описанием */}
                <div className="flex-grow p-4">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">
                        {language === "en" ? title_en || title || t("Без названия") : title || t("Без названия")}
                    </h1>
                    <p className="text-gray-600 mb-4">{localizedDescription}</p>
                    {organizer && (
                        <p className="text-gray-600">
                            <strong>{t("Организатор")}: </strong>
                            {language === "en" ? organizer_en || organizer : organizer}
                        </p>
                    )}
                </div>

                {/* Правый блок с датой и временем */}
                <div className="flex-shrink-0 p-4 text-right">
                    <div className="mb-4">
                        <strong className="block text-gray-800">{t("Дата проведения")}: </strong>
                        <span className="text-gray-600">
              {startDate} {endDate && `- ${endDate}`}
            </span>
                    </div>
                    {localizedTime && (
                        <div>
                            <strong className="block text-gray-800">{t("Время")}: </strong>
                            <span className="text-gray-600">{localizedTime}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Нижний блок со всеми остальными данными */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                {eventType && (
                    <div className="mb-4">
                        <strong>{t("Тип события")}: </strong>
                        {eventType}
                    </div>
                )}

                {localizedOrganizer2 && (
                    <div className="mb-4">
                        <strong>{t("Соорганизатор")}: </strong>
                        {localizedOrganizer2}
                    </div>
                )}

                {localizedPartner && (
                    <div className="mb-4">
                        <strong>{t("Партнер")}: </strong>
                        {localizedPartner}
                    </div>
                )}

                {phoneNumber && (
                    <div className="mb-4">
                        <strong>{t("Телефон")}: </strong>
                        {phoneNumber}
                    </div>
                )}

                {website && (
                    <div className="mb-4">
                        <strong>{t("Сайт")}: </strong>
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
                        <strong>{t("Карта")}: </strong>
                        <div
                            id="map-container"
                            className="w-full h-64 border rounded-lg overflow-hidden"
                            style={{ maxHeight: "400px", minHeight: "300px" }}
                        ></div>
                    </div>
                )}

                {localizedLocation && (
                    <div className="mb-4">
                        <strong>{t("Место проведения")}: </strong>
                        {localizedLocation}
                    </div>
                )}

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

                {video && (
                    <div className="mb-4">
                        <iframe
                            src={video}
                            title={t("Видео")}
                            className="w-full h-64"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {slider.length > 0 && (
                    <div className="mb-4">
                        <strong>{t("Фотографии с мероприятия")}: </strong>
                        <div className="flex space-x-4">
                            {slider.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide.asset._ref}
                                    alt={`Slide ${index + 1}`}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="mb-4">
                    <strong>{t("Тема")}: </strong>
                    {language === "en"
                        ? exhibition.theme_en || t("Тема отсутствует")
                        : exhibition.theme || t("Тема отсутствует")}
                </div>

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
