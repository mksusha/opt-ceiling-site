"use client";

import React from "react";
import Header from "./components/Header";
import StatsSection from "@/app/components/StatsSection";
import { useTranslation } from "react-i18next";
import "./i18n"; // Подключение i18n

export default function Home() {
    const { t } = useTranslation(); // Хук для работы с переводами

    return (
        <div>

            <Header />

            <StatsSection />
        </div>
    );
}
