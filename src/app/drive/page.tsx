import React from "react";

import './/styles/gradientify.css'
import GradientPage from "@/app/drive/GradientPage";
import ExpectBlock from "@/app/drive/ExpectBlock";
import WhoWillAttend from "@/app/drive/WhoWillAttend";
import ProgramBlock from "@/app/drive/ProgramBlock";
import VideosBlock from "@/app/drive/VideosBlock";


export default function HomePage() {
    return (
        <div >
       <GradientPage></GradientPage>
    <ExpectBlock />
            <WhoWillAttend></WhoWillAttend>
            <ProgramBlock></ProgramBlock>
            <VideosBlock></VideosBlock>
        </div>
    );
}