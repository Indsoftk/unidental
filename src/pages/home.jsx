import React from "react"
import SectionBanner from "./molecules/home/sectionBanner"
import SectionService from "./molecules/home/sectionService"
import SectionBannerTeam from "./molecules/home/sectionBannerTeam"
import SectionChoise from "./molecules/home/sectionChoise"
import SectionReviews from "./molecules/home/sectionReviews"
import SectionLocation from "./molecules/home/sectionLocation"
import SectionSamano from "./molecules/home/sectionSamanoBanner"
import twoSamano from '../assets/img/home_samano_two.png'
import SectionTratament from "../pages/molecules/home/sectionTratamet"
import { Link, Links } from "react-router-dom";

const Home =()=> {
    return(
        <>
            <SectionBanner/>
            {/* two samano section */}
                        <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                            <div className='row mx-0'>
                                <div className='col-xl-8 u-samano-two px-0 u-border-roud-left'>
                                    <div className='col-xl-12 py-5 px-5'>
                                        <div className='col-xl-12 text-center'>
                                            <span className='u-title-prin-content-white'>
                                            Welcome to Unidental Matamoros: <br/>
                                            </span>
                                            <span className='u-title-prin-content-black'>your best option for Dental  Care!
                                            </span>
                                        </div>
                                        <div className='col-xl-12 text-center'>
                                            <b>We focus on both quality and affordable costs</b>
                                        </div>
                                        <div className='col-xl-12 pt-3'>
                                            <p>
                                            Among many destinations, Unidental Matamoros stands out as the    
                                            safest, most reliable, and most accessible option. Located just steps 
                                            from the international bridge, there’s no need to cross by car. We are          
                                            well-connected to the rest of the United States, welcoming patients 
                                            from  Texas and across the country seeking affordable, high-quality   
                                            dental care.<br/><br/>
            
                                            From our advanced technology to our caring staff, we are fully equipped 
                                            to meet all your Restorative and Cosmetic Dentistry needs at our
                                            modern and conveniently located practice in Matamoros.
                                            </p>
                                        </div>
                                        <div className='col-xl-12 pt-3 text-center'>
                                            <Link className="u-button-black" to="/why">Why choose US?</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 px-0'>
                                    <img className="img-fluid u-border-roud-right" src={twoSamano} alt="Dr. Rolando Samano" />
                                </div>
                            </div>
                        </div>
            <SectionTratament/>
            <SectionService/>
            <SectionSamano/>
            <SectionBannerTeam/>
            <SectionChoise/>
            <SectionReviews/>
            <SectionLocation/>
        </>
    )
}

export default Home