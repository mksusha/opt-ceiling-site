import React from "react";

import './/styles/gradientify.css'
import GradientPage from "@/app/drive/GradientPage";
import ExpectBlock from "@/app/drive/ExpectBlock";
import WhoWillAttend from "@/app/drive/WhoWillAttend";
import ProgramBlock from "@/app/drive/ProgramBlock";
import VideosBlock from "@/app/drive/VideosBlock";
import EventPhotosBlock from "@/app/drive/EventPhotosBlock";
import PartnersSection from "@/app/drive/PartnersSection";
import EventSection from "@/app/drive/EventSection";
import Footer from "@/app/drive/Footer";
import MeetingPlace from "@/app/drive/MeetingPlace";


export default function HomePage() {
    return (
        <div >
       <GradientPage></GradientPage>
    <ExpectBlock />
            <WhoWillAttend></WhoWillAttend>
            <ProgramBlock></ProgramBlock>
            <VideosBlock></VideosBlock>
            <EventPhotosBlock></EventPhotosBlock>
            <PartnersSection></PartnersSection>
            <MeetingPlace></MeetingPlace>
            <EventSection></EventSection>
            <Footer />
        </div>
    );
}