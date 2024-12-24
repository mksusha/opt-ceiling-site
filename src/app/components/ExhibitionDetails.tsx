import React from "react";

interface Exhibition {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    organizer: string;
    eventType: string;
    image?: string;
}

interface ExhibitionDetailsProps {
    exhibition: Exhibition;
    formatDate: (date: string) => string;
    t: (key: string) => string;
}

const ExhibitionDetails: React.FC<ExhibitionDetailsProps> = ({
                                                                 exhibition,
                                                                 formatDate,
                                                                 t,
                                                             }) => {
    return (
        <div className="container max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {exhibition.image && (
                    <img
                        src={exhibition.image}
                        alt={exhibition.title}
                        className="w-full h-64 object-cover"
                    />
                )}
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">
                        {exhibition.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{exhibition.description}</p>
                    <div className="mb-4">

                        {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                    </div>
                    <div className="mb-4">

                        {exhibition.eventType}
                    </div>
                    <div>
                        <strong>{t("Организатор")}: </strong>
                        {exhibition.organizer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExhibitionDetails;
