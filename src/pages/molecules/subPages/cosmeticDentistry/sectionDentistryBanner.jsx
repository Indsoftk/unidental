import dentistryBannerMobile from '../../../../assets/img/dental_dentistry/mobile/dentistry_banner_mobile.png'
import dentistryBanner from "../../../../assets/img/dental_dentistry/dentistry_banner.webp"


const SectionBannerDentistryMobile = () => {
    return(
        
         <>
            <div className="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="u-position">
                        <div>
                            <span className="u-title-prin-content-home">Cosmetic Dentistry</span><br/>
                            <span className="u-title-secod text-white">We offer a full range of cosmetic
                        dentistry to give you the smile of
                        your dreams</span>
                        </div>
                        <div className="u-content-stxt">
                        One-time visits available!
                        </div>
                        <div className="pt-3">
                            
                        </div>
                </div>
                <div className="col-xl-12">
                    <img className="img-fluid" src={dentistryBanner} alt="Unidental Matamoros Dentist" />
                </div>
            </div>
            {/* version mobile */}
            <div className="container d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="col-xl-12 u-position-m pt-4">
                    <div className="col-xl-12 text-center px-4">
                        <span className="u-title-prin-m">Cosmetic Dentistry</span><br/>
                        <span className="u-title-trd-m text-white">We offer a full range of cosmetic
                        dentistry to give you the smile of
                        your dreams</span>
                    </div>
                    <div className="col-xl-12 px-4 u-content-stxt text-center u-color-text-yellow">
                    One-time visits available!
                    </div>
                    <div className="col-xl-12 pt-3">
                        
                    </div>
                </div>
            <img className="img-fluid" src={dentistryBannerMobile} alt="Unidental Matamoros Mexico"/>
        </div>
        </>
        
    )
}




export default SectionBannerDentistryMobile;