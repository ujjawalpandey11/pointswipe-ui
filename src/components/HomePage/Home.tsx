import React from "react";
import BrandingSection from "./BrandingSection";
import BurningSection from "./BurningSection";
import EarningSection from "./EarningSection";
import Heading from "./Heading";
import TierSection from "./TierSection";
import "./Home.css"

export default function Home() {
    return (
        <div className="container-md mt-4">
        <Heading/>
        <BrandingSection/>
        <hr></hr>
        <TierSection/>
        <hr></hr>
        <EarningSection/>
        <hr></hr>
        <BurningSection/>
        </div>
    )
}