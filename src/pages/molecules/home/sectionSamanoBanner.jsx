
import threeSamano from '../../../assets/img/home_samano_three.png'
import { Link, Links } from "react-router-dom";

const SectionSamano = () => {
    return(
        <>
            
            
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
           
        </>
    )
}

export default SectionSamano;