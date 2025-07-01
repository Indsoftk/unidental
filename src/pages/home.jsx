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
import oneSamano from '../assets/img/home_samano_one.png'

import fourSamano from '../assets/img/home_samano_four.png'

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
            <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                            <div className='row mx-0'>
                                <div className='col-xl-4 px-0'>
                                    <img className="img-fluid u-border-roud-left" src={oneSamano} alt="Dr. Rolando Samano" />
                                </div>
                                <div className='col-xl-8 u-samano-one px-0 u-border-roud-right'>
                                    <div className='col-xl-12 py-5 px-5'>
                                        <div className='col-xl-12 text-center'>
                                            <span className='u-title-solid-black'>
                                            Dental excellence with over<br/>
                                            25 years of experience.
                                            </span>
                                        </div>
                                        <div className='col-xl-12 text-center'>
                                            <span className='u-title-prin-content'>Just across the </span>
                                            <span className='u-title-prin-content-black'>tip of Texas!</span>
                                        </div>
                                        <div className='col-xl-12 pt-3'>
                                            <p>
                                            At <b>Unidental</b>, we take pride in having a team of highly trained dentists
                                            and professionals ready to meet all your dental needs. We offer a wide 
                                            range of procedures across all dental specialties.<br/><br/>
            
                                            Your comfort and your smile are our top priorities every time you visit.  
                                            <b> Dr. Rolando Samano Brooks</b> and his team of specialists take the time to 
                                            understand your needs and provide you with comprehensive, high-quality 
                                            care.
                                            </p>
                                        </div>
                                        <div className='col-xl-12 pt-3 text-center'>
                                            {/* <Button/> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/* four section samano */}
            <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className='row mx-0'>
                    <div className='col-xl-6 u-box-yellow px-0 u-border-roud-left'>
                        <div className='col-xl-12 py-3 px-5'>
                            <div className='col-xl-12 text-center'>
                                <span className='u-title-solid-black'>
                                Save up to 70 % on Dental<br/>
                                Treatments compared to <br/>
                                prices back home
                                </span>
                            </div>
                            <div className='col-xl-12 text-center text-white'>
                                <b>
                                    Many of our patients save thousands of dollars by <br/>
                                    choosing Unidental Matamoros—without <br/>
                                    compromising on quality.
                                </b>
                            </div>
                            <div className='col-xl-12 pt-3'>
                                <p>
                                You’ll receive world-class dental care at a fraction of U.S. 
                                prices, all while  enjoying treatment in a beautiful and 
                                convenient location.<br/><br/>

                                Excellent dental work doesn’t have to cost a fortune. 
                                Whether you need Cosmetic or Restorative Dentistry, 
                                our clinic delivers  top-tier   results at a significantly 
                                lower cost than what you would pay north of the border.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 px-0'>
                        <img className="img-fluid u-border-roud-right" src={fourSamano} alt="Dr. Rolando Samano" />
                    </div>
                </div>
            </div>
            <SectionService/>
            <SectionChoise/>
            <SectionReviews/>
            <SectionBannerTeam/>
            <SectionSamano/>
            
            
            
            
            <SectionLocation/>
        </>
    )
}

export default Home