import AboutBannerTeam from '../../../assets/img/banner_team.png'
import aboutBannerMobile from "../../../assets/img/team/mobile/team_banner_mobile.webp"

const AboutSectionBanner = () => {
    return(
        <>
            <div className="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="u-position pt-5">
                        <div className='pt-5 px-5'>
                            <span className="u-title-prin-content-home">Meet the team</span>
                        </div>
                        <div className="u-content-stxt text-white px-5">
                            Our entire dental care team is<br/> 
                            dedicated to providing you with <br/> 
                            our “Five-Star” service.
                        </div>
                        <div className="pt-3">
                        </div>
                </div>
                <div className="col-xl-12">
                    <img className="img-fluid" src={AboutBannerTeam} alt="Unidental Matamoros Dentist" />
                </div>
            </div>
            {/* end desktop version */}
            {/* version mobile */}
            <div className="container d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className=" u-position-m pt-5">
                        <div className='col-12 pt-5 px-2'>
                            <span className="u-title-prin-content-home">Meet the team</span>
                        </div>
                        <div className="u-content-stxt text-white px-5">
                            Our entire dental care team is<br/> 
                            dedicated to providing you with <br/> 
                            our “Five-Star” service.
                        </div>
                        <div className="pt-3">
                        </div>
                </div>
                <div className="col-xl-12">
                    <img className="img-fluid" src={aboutBannerMobile} alt="Unidental Matamoros Dentist" />
                </div>
            </div>
            {/* end version mobile */}


        </>
    )
}


export default AboutSectionBanner