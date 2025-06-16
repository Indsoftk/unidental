import imgGrid03 from "../../assets/img/dental_grid_03.png"
import imgGrid04 from "../../assets/img/dental_grid_04.png"
import imgGrid05 from "../../assets/img/dental_grid_05.png"
import imgGrid06 from "../../assets/img/dental_grid_06.png"



const SimpleGrid = () => {
    return(
        <>
        <div className="container pt-5">
            <div className="col-xl-12">
                <div className="col-xl-12 text-center">
                    <span className="u-title-prin-content">Our relat­ed treatments</span>
                </div>
                <div className="col-xl-12 text-center">
                    <span>Access afford­able and qual­i­ty den­tal care. <br/>
                        Here are some of our most pop­u­lar and top-rat­ed den­tal treat­ments to<br/> trans­form your smile and upgrade your con­fi­dence. <br/>
                        Don’t see what you’re look­ing for here? Get in touch to book a con­sul­ta­tion with<br/> our den­tal implant and cos­met­ic team to learn how we can help.</span>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-xl-3 pt-5">
                    <a className="" href=""> 
                        <div className="row mx-0 u-box-yellow u-border-roud-all">
                            <div className="col-xl-12">
                                <div className="col-xl-12 text-center py-3">
                                    <span className="u-title-grid-white">Restorative </span> 
                                    <span className="u-title-grid-black">Dentistry</span>
                                </div>
                                <div className="col-xl-12">
                                <img className="img-fluid" src={imgGrid03} alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xl-3 pt-5">
                    <a className="" href="">
                        <div className="row mx-0 u-box-yellow u-border-roud-all">
                            <div className="col-xl-12">
                                <div className="col-xl-12 text-center py-3">
                                    <span className="u-title-grid-white">Orthod</span> 
                                    <span className="u-title-grid-black">ontics</span>
                                </div>
                                <div className="col-xl-12">
                                <img className="img-fluid" src={imgGrid04} alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xl-3 pt-5">
                    <a className="" href="">
                        <div className="row mx-0 u-box-yellow u-border-roud-all">
                            <div className="col-xl-12">
                                <div className="col-xl-12 text-center py-3">
                                    <span className="u-title-grid-white">Oral </span> 
                                    <span className="u-title-grid-black">Surgery</span>
                                </div>
                                <div className="col-xl-12">
                                <img className="img-fluid" src={imgGrid05} alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xl-3 pt-5">
                    <a className="" href="">
                        <div className="row mx-0 u-box-yellow u-border-roud-all">
                            <div className="col-xl-12">
                                <div className="col-xl-12 text-center py-3">
                                    <span className="u-title-grid-white">Children’s </span> 
                                    <span className="u-title-grid-black">Dentistry</span>
                                </div>
                                <div className="col-xl-12">
                                <img className="img-fluid" src={imgGrid06} alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}




export default SimpleGrid