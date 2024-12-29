"use client";

import React from "react";
import { useTranslation } from "react-i18next";

type Event = {
    _id: string;
    titleRu: string;
    titleEn: string;
    date: string;
    imageUrl: string;
    url: string;
};

type EventsProps = {
    events?: Event[]; // Делает `events` необязательным
};

const EventsList = ({ events }: EventsProps) => {
    const { i18n } = useTranslation();
    const locale = i18n.language;

    if (!events || events.length === 0) {
        return <p className="text-center text-gray-500">Нет доступных мероприятий.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {events.map((event) => {

                const title = locale === "ru" ? event.titleRu : event.titleEn;

                return (
                    <div key={event._id} className="border rounded-lg overflow-hidden shadow-md">
                        <a href={event.url} target="_blank" rel="noopener noreferrer">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={event.imageUrl}
                                    alt={title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </a>
                        <div className="p-3">
                            <h3 className="text-base font-semibold mb-1">{title}</h3>
                            <p className="text-sm text-gray-500">
                                {new Date(event.date).toLocaleDateString(locale)}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EventsList;
