"use client";

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/gradientify.css";

const EventParticipants = () => {
    const [scrollY, setScrollY] = useState(0);
    const scrollRef = useRef(0);

    const handleScroll = () => {
        const newScrollY = window.scrollY;
        if (scrollRef.current !== newScrollY) {
            scrollRef.current = newScrollY;
            setScrollY(newScrollY);  // Обновляем состояние только если оно изменилось
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        AOS.init(); // Инициализация AOS
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Массив участников мероприятия
    const participants = [
        { id: "01", description: "Начинающие мастера и все, кто интересуется строительной сферой", aos: "fade-left" },
        { id: "02", description: "Дизайнеры и архитекторы", aos: "fade-right" },
        { id: "03", description: "Мастера-профессионалы с опытом", aos: "fade-up" },
        { id: "04", description: "Лидеры мнений из строительной индустрии", aos: "fade-left" },
        { id: "05", description: "Предприниматели, руководители строительных, ремонтных, монтажных организаций", aos: "fade-right" },
    ];

    return (
        <div className="mt-16 px-8 py-8 max-w-[1350px] mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-white text-[50px] font-bold">Кто будет на мероприятии?</h2>
            </div>
            <div className="event-container">
                {participants.slice(0, 4).map((participant, index) => (
                    <div
                        key={index}
                        className="backdrop-blur-card relative"
                        data-aos={participant.aos}
                        data-aos-duration="1000"
                    >
                        <div className="circle-number">{participant.id}</div>
                        <div className="event-text">
                            <p>{participant.description}</p>
                        </div>
                    </div>
                ))}
                {/* Последний блок, который занимает две колонки и имеет нужную форму */}
                <div
                    className="backdrop-blur-card relative col-span-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="circle-number">05</div>
                    <div className="event-text">
                        <p>
                            Предприниматели, руководители строительных, ремонтных, монтажных организаций
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventParticipants;
