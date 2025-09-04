import React from "react";

import './styles/siberian.css'
import GradientPage from "@/app/siberian-drive/GradientPage";
import FirstBlock from "../siberian-drive/FirstBlock";
// import {Quote} from "lucide-react";
import QuoteVideoBlock from "../siberian-drive/QuoteVideoBlock";
// import NevskyDriveBlock from "@/app/nevsky-drive/NevskyNew";
// import WhoWillAttend.tsx from "@/app/nevsky-drive/WhoWillAttend.tsx";
// import DriveAcrossCountry from "@/app/nevsky-drive/DriveAcrossCountry";
// import EventPhotosBlock from "./EventPhotosBlock";
//
// import MeetingPlace from "@/app/nevsky-drive/MeetingPlace";
// import EventSection from "@/app/nevsky-drive/EventSection";
// import Footer from "@/app/nevsky-drive/Footer";
// import ProgramBlock from "@/app/nevsky-drive/ProgramBlock";
import OrganaizersSection from "@/app/siberian-drive/OrganaizersSection";
import PartnersSection from "@/app/siberian-drive/PartnersSection";
import WhoWillAttend from "../nevsky-drive/WhoWillAttend";
import DriveAcrossCountry from "@/app/siberian-drive/DriveAcrossCountry";
import ProgramBlock from "@/app/siberian-drive/ProgramBlock";
import PaintballBlock from "@/app/siberian-drive/PaintballBlock";
import RelaxBlock from "@/app/siberian-drive/RelaxBlock";
import TariffBlock from "@/app/siberian-drive/TariffBlock";
import EventPhotosBlock from "./EventPhotosBlock";
import PartnerCallBlock from "@/app/siberian-drive/PartnerCallBlock";
import MeetingPlace from "./MeetingPlace";
import Footer from "@/app/siberian-drive/Footer";
import DriveBlock from "@/app/siberian-drive/DriveBlock";


export const metadata = {
    title: "Сибирский Драйв — OPT Ceiling",
    description: "Узнайте всё о масштабном событии Сибирский Драйв: программа, участники, партнёры и атмосфера драйва по всей стране.",
};

export default function HomePage() {
    return (
        <div >
            <GradientPage></GradientPage>
            <FirstBlock></FirstBlock>
            <QuoteVideoBlock></QuoteVideoBlock>
            {/*<NevskyDriveBlock></NevskyDriveBlock>*/}
            <WhoWillAttend></WhoWillAttend>
            <DriveAcrossCountry></DriveAcrossCountry>
            <ProgramBlock></ProgramBlock>
<PaintballBlock></PaintballBlock>
            <RelaxBlock></RelaxBlock>

            <EventPhotosBlock></EventPhotosBlock>
            <DriveBlock></DriveBlock>
            <TariffBlock></TariffBlock>
            <OrganaizersSection></OrganaizersSection>
            {/*<EventSection></EventSection>*/}
            <PartnersSection></PartnersSection>
            <PartnerCallBlock></PartnerCallBlock>
            <MeetingPlace></MeetingPlace>

            <Footer />

        </div>
    );
}