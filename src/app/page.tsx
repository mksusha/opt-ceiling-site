"use client";

import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import StatsSection from "@/app/components/StatsSection";
import Exhibitions from "@/app/components/Exhibitions";
import { useTranslation } from "react-i18next";
import "./i18n";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
    const { t } = useTranslation();
    const exhibitionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({
            duration: 1300,
            easing: "ease-in-out",
            offset: 100,    // Расстояние до появления анимации
            once: true,
        });
    }, []);

    const handleNavigateToExhibitions = () => {
        exhibitionsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Header />
            <StatsSection onNavigateToExhibitions={handleNavigateToExhibitions} />
            <Exhibitions ref={exhibitionsRef} />
        </div>
    );
}
