'use client'

import ClientWrapper from "@/app/components/ClientWrapper";
import Header from "@/app/components/Header";
import React, {useEffect, useRef} from "react";
import Footer from "@/app/components/Footer";
import {useTranslation} from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import PartnersPage from "@/app/components/PartnersPage";
export default function Page() {

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


    return (
        <ClientWrapper>

            {/* Хедер */}
            <Header/>


            <div data-aos="fade-up">
                <PartnersPage/>
            </div>
            <Footer/>

        </ClientWrapper>
    );
}


