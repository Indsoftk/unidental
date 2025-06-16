import dentalImplantBanner from "../../../../assets/img/banner_dental_implant.png"
import implantsBannerM from "../../../../assets/img/dental_implants/mobile/banner_implants_m.webp"

const SectionBannerD = () => {
    return(
        <>
            <div className="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="u-position">
                        <div>
                            <span className="u-title-prin-content-home text-white">Get from a single tooth to</span><br/>
                            <span className="u-title-secod">a full arch in a<br/> single visit!s</span>
                        </div>
                        <div className="u-content-stxt">
                            Welcome to Unidental, recognized as the best option of Dentists<br/>
                            on the Border. Our High quality-experienced Multidisciplinary <br/>
                            Dentistry Center provide quality dental care, safely and comfortably.
                        </div>
                        <div className="pt-3">
                            
                        </div>
                </div>
                <div className="col-xl-12">
                    <img className="img-fluid" src={dentalImplantBanner} alt="Unidental Matamoros Dentist" />
                </div>
            </div>
            {/* version mobile */}
            <div className="container d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="col-xl-12 u-position-m pt-4">
                    <div className="col-xl-12 text-center px-4">
                        <span className="u-title-prin-m-white">Get from a single tooth to</span><br/>
                        <span className="u-title-secod-m">a full arch in a single visit!</span>
                    </div>
                    <div className="col-xl-12 px-4 u-content-stxt text-center">
                    Fast, predictable & painless immediate loading protocol
                    Go home with teeth immediately after the treatment!
                    </div>
                    <div className="col-xl-12 pt-3">
                        
                    </div>
                </div>
            <img className="img-fluid" src={implantsBannerM} alt="Unidental Matamoros Mexico"/>
        </div>
        </>
    )
}



export default SectionBannerD;