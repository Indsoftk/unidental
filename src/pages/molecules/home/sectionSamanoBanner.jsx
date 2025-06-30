import oneSamano from '../../../assets/img/home_samano_one.png'
import threeSamano from '../../../assets/img/home_samano_three.png'
import fourSamano from '../../../assets/img/home_samano_four.png'
import Button from '../../atoms/button';
import { Link, Links } from "react-router-dom";

const SectionSamano = () => {
    return(
        <>
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
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* three section samano */}
            <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className='row mx-0'>
                    <div className='col-xl-5 px-0'>
                        <img className="img-fluid u-border-roud-left" src={threeSamano} alt="Dr. Rolando Samano" />
                    </div>
                    <div className='col-xl-7 u-samano-three px-0 u-border-roud-right'>
                        <div className='col-xl-12 py-5 px-5'>
                            <div className='col-xl-12 text-center'>
                                <span className='u-title-prin-content'>Meet Our   </span>
                                <span className='u-title-prin-content-black'>Dentist</span>
                            </div>
                            <div className='col-xl-12 text-center'>
                                <span className='u-title-solid-black'>
                                Rolando Samano Brooks,  DDS
                                </span>
                            </div>
                            <div className='col-xl-12 pt-3'>
                                <p>
                                Dr. Samano Brooks offers his patients state-of-the-art dental care in 
                                both cosmetic and restorative dentistry, with a strong focus on oral 
                                implantology and orthodontics. Together with his associates at 
                                Unidental Clinic, they provide comprehensive dental services 
                                across all specialties.<br/><br/>

                                He is an active member of several prestigious dental organizations, 
                                staying current with the latest advancements in the field. His 
                                advanced training includes implant and oral surgery, cosmetic 
                                restorations, interceptive and corrective orthodontics, and clear 
                                aligner therapy—ensuring high-quality care that addresses every 
                                aspect of oral health.<br/><br/>

                                Dr. Samano Brooks and his team are committed to treating each 
                                patient with personalized attention and the highest standards of 
                                quality. Their family-friendly approach and use of cutting-edge dental 
                                technology create a welcoming, relaxed environment for patients of 
                                all ages.
                                </p>
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
        </>
    )
}

export default SectionSamano;