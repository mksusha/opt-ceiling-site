import React from "react";

import './/styles/nevsky.css'
import GradientPage from "@/app/nevsky-drive/GradientPage";
import FirstBlock from "./FirstBlock";
import {Quote} from "lucide-react";
import QuoteVideoBlock from "@/app/nevsky-drive/QuoteVideoBlock";
import NevskyDriveBlock from "@/app/nevsky-drive/NevskyNew";
import WhoWillAttend from "@/app/nevsky-drive/WhoWillAttend";
import DriveAcrossCountry from "@/app/nevsky-drive/DriveAcrossCountry";
import EventPhotosBlock from "./EventPhotosBlock";

import MeetingPlace from "@/app/nevsky-drive/MeetingPlace";
import EventSection from "@/app/nevsky-drive/EventSection";
import Footer from "@/app/nevsky-drive/Footer";
import ProgramBlock from "@/app/nevsky-drive/ProgramBlock";
import OrganaizersSection from "./OrganaizersSection";
import PartnersSection from "@/app/nevsky-drive/PartnersSection";
// import ExpectBlock from "@/app/drive/ExpectBlock";
// import WhoWillAttend.tsx.tsx from "@/app/drive/WhoWillAttend.tsx.tsx";
// import ProgramBlock from "@/app/drive/ProgramBlock";
// import VideosBlock from "@/app/drive/VideosBlock";
// import EventPhotosBlock from "@/app/drive/EventPhotosBlock";
// import PartnersSection from "@/app/drive/PartnersSection";
// import EventSection from "@/app/drive/EventSection";
// import Footer from "@/app/drive/Footer";
// import MeetingPlace from "@/app/drive/MeetingPlace";

export const metadata = {
        title: "Невский Драйв — OPT Ceiling",
        description: "Узнайте всё о масштабном событии Невский Драйв: программа, участники, партнёры и атмосфера драйва по всей стране.",
};

export default function HomePage() {
    return (
        <div >
            <GradientPage></GradientPage>
            <FirstBlock></FirstBlock>
            <QuoteVideoBlock></QuoteVideoBlock>
            <ProgramBlock></ProgramBlock>
            <NevskyDriveBlock></NevskyDriveBlock>
            <WhoWillAttend></WhoWillAttend>
            <DriveAcrossCountry></DriveAcrossCountry>
            {/*<ExpectBlock />*/}
            {/*<WhoWillAttend.tsx.tsx></WhoWillAttend.tsx.tsx>*/}
            {/*<ProgramBlock></ProgramBlock>*/}
            {/*<VideosBlock></VideosBlock>*/}
            <EventPhotosBlock></EventPhotosBlock>
            <OrganaizersSection></OrganaizersSection>
            <MeetingPlace></MeetingPlace>
            <EventSection></EventSection>
            <PartnersSection></PartnersSection>
            <Footer />
            {/*<MeetingPlace></MeetingPlace>*/}
            {/*<EventSection></EventSection>*/}
            {/*<Footer />*/}
        </div>
    );
}