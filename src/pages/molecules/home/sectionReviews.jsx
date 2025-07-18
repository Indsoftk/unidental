import { ReactGoogleReviews } from "react-google-reviews"
import "react-google-reviews/dist/index.css"


const SectionReviews = () => {
    return(
        <>
        <div className="container pt-5">
            <div className="col-xl-12 px-5">
            <div className="col-xl-12 text-center">
                <span className="u-title-prin-content">What Patients </span>
                <span className="u-title-prin-content-black">Are Saying</span>
            </div>
            <div className="col-xl-12 text-center">
                <span className="u-content-stxt">We believe our patients are the best judges of dental quality and customer
                    service for our dental practice. <br/>
                    Read certified testimonials of what our 
                    patients are saying about our doctors and exceptional staff.<br/>

                    If you are already one of our patients, we welcome your comments, if you 
                    would like to place a review of our practice.</span>
            </div>
            {/* desktop version */}
            <div className="col-xl-12 pt-5 px-5 u-box-white mt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <ReactGoogleReviews  
                layout="carousel"  
                featurableId="f32de58a-218f-4bef-ad07-6af6b52b6990" />
            </div>
            {/* end desktop version */}
            {/* version mobile */}
            <div className="col-12 pt-5  u-box-white mt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <ReactGoogleReviews  
                layout="carousel"  
                featurableId="f32de58a-218f-4bef-ad07-6af6b52b6990" />
            </div>
            {/* end version mobile */}
            </div>
        </div>
        </>
    )
}


export default SectionReviews