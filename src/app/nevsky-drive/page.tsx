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
import PartnersSection from "./PartnersSection";
// import ExpectBlock from "@/app/drive/ExpectBlock";
// import WhoWillAttend.tsx from "@/app/drive/WhoWillAttend.tsx";
// import ProgramBlock from "@/app/drive/ProgramBlock";
// import VideosBlock from "@/app/drive/VideosBlock";
// import EventPhotosBlock from "@/app/drive/EventPhotosBlock";
// import PartnersSection from "@/app/drive/PartnersSection";
// import EventSection from "@/app/drive/EventSection";
// import Footer from "@/app/drive/Footer";
// import MeetingPlace from "@/app/drive/MeetingPlace";


export default function HomePage() {
    return (
        <div >
            <GradientPage></GradientPage>
            <FirstBlock></FirstBlock>
            <QuoteVideoBlock></QuoteVideoBlock>
            <NevskyDriveBlock></NevskyDriveBlock>
            <WhoWillAttend></WhoWillAttend>
            <DriveAcrossCountry></DriveAcrossCountry>
            {/*<ExpectBlock />*/}
            {/*<WhoWillAttend.tsx></WhoWillAttend.tsx>*/}
            {/*<ProgramBlock></ProgramBlock>*/}
            {/*<VideosBlock></VideosBlock>*/}
            <EventPhotosBlock></EventPhotosBlock>
            <PartnersSection></PartnersSection>
            {/*<MeetingPlace></MeetingPlace>*/}
            {/*<EventSection></EventSection>*/}
            {/*<Footer />*/}
        </div>
    );
}