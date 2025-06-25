import React from "react"
import SectionBanner from "./molecules/home/sectionBanner"
import SectionService from "./molecules/home/sectionService"
import SectionBannerTeam from "./molecules/home/sectionBannerTeam"
import SectionChoise from "./molecules/home/sectionChoise"
import SectionTratament from "./molecules/home/sectionTratamet"
import SectionReviews from "./molecules/home/sectionReviews"
import SectionLocation from "./molecules/home/sectionLocation"
import SectionSamano from "./molecules/home/sectionSamanoBanner"

const Home =()=> {
    return(
        <>
            <SectionBanner/>
            <SectionService/>
            <SectionSamano/>
            <SectionBannerTeam/>
            <SectionChoise/>
            <SectionTratament/>
            <SectionReviews/>
            <SectionLocation/>
        </>
    )
}

export default Home