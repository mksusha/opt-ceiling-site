import React from "react";

import '../nevsky-drive/styles/nevsky.css'
import GradientPage from "@/app/moscow-drive/GradientPage";
import FirstBlock from "./FirstBlock";
// import {Quote} from "lucide-react";
import QuoteVideoBlock from "@/app/moscow-drive/QuoteVideoBlock";
import ExpectBlock from "./ExpectBlock";
// import NevskyDriveBlock from "@/app/nevsky-drive/NevskyNew";
// import WhoWillAttend.tsx from "@/app/nevsky-drive/WhoWillAttend.tsx";
import DriveAcrossCountry from "@/app/moscow-drive/DriveAcrossCountry";
import EventPhotosBlock from "../siberian-drive/EventPhotosBlock";
//
// import MeetingPlace from "@/app/nevsky-drive/MeetingPlace";
// import EventSection from "@/app/nevsky-drive/EventSection";
// import Footer from "@/app/nevsky-drive/Footer";
import ProgramBlock from "@/app/moscow-drive/ProgramBlock";
import WhoWillAttend from "../moscow-drive/WhoWillAttend";
import TariffBlock from "./TariffBlock";
import PartnersSection from "./PartnersSection";
import OrganaizersSection from "./OrganaizersSection";
import MeetingPlace from "./MeetingPlace";
import EventSection from "./EventSection";
import Footer from "./Footer";
// import OrganaizersSection from "./OrganaizersSection";
// import PartnersSection from "@/app/nevsky-drive/PartnersSection";


export const metadata = {
    title: "Московский Драйв — OPT Ceiling",
    description: "Узнайте всё о масштабном событии Московский Драйв: программа, участники, партнёры и атмосфера драйва по всей стране.",
};

export default function HomePage() {
    return (
        <div >
            <GradientPage></GradientPage>
            <FirstBlock></FirstBlock>
            <QuoteVideoBlock></QuoteVideoBlock>
            <ExpectBlock></ExpectBlock>
            <ProgramBlock></ProgramBlock>
            {/*<NevskyDriveBlock></NevskyDriveBlock>*/}
            <WhoWillAttend></WhoWillAttend>
            <DriveAcrossCountry></DriveAcrossCountry>

            <EventPhotosBlock></EventPhotosBlock>
            <TariffBlock></TariffBlock>
            <MeetingPlace></MeetingPlace>
            <OrganaizersSection></OrganaizersSection>
            {/*<MeetingPlace></MeetingPlace>*/}
            {/*<EventSection></EventSection>*/}
            <PartnersSection></PartnersSection>
            <EventSection></EventSection>
            <Footer />

        </div>
    );
}