import meat_mobile from "../../../../../assets/img/dental_implants/mobile/meat_mobile.png"

const SectionMeatMobile = () => {
    return(
        <>
        <div className="container pt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div className="row mx-0">
                <div className="col-xl-8 u-box-yellow u-border-round-top">
                    <div className="col-xl-12 px-5">
                        <div className="col-xl-12">
                        <span className="u-title-prin-content-white">Conventional Dental Implants</span>
                        </div>
                        <div className="col-xl-12">
                            <span>There is nothing worse than having to watch what you order at 
                                restaurants for fear that you won’t be able to chew in front of 
                                your friends and loved ones.<br/>

                                Your menu options will open up as you explore foods again 
                                that you had to abandon because you weren’t able to chew.</span>
                        </div>
                        <div className="col-xl-12 text-center py-3">
                            <a className="u-button-black" href="" >Contact Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 px-0">
                    <img className="img-fluid" src={meat_mobile} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionMeatMobile;