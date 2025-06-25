import imgGrid01 from "../../assets/img/dental_grid_01.png"
import imgGrid02 from "../../assets/img/dental_grid_02.png"
import Grid from "../atoms/grid"

const Ugrid = () => {
    return(
        <>
        <div className="container">
            <div className="row mx-0">
            <div className="col-xl-6 pt-5">
                <a className="" href="">
                    <div className="row mx-0 u-box-yellow u-border-roud-all">
                        <div className="col-xl-6">
                            <div className="col-xl-12">
                                <span className="u-title-prin-content-white">Dental</span>
                                <span className="u-title-prin-content-black">Implants</span>
                            </div>
                            <div className="col-xl-12">
                                <span className="text-white u-content-stxt">
                                    Get from a single tooth to a full 
                                    arch in a single visit!
                                    fast, Predictable & Painless
                                    Immediate Loading Protocol
                                    go home with teeth immediately 
                                    after the treatment!
                                </span>
                            </div>
                            <div className="col-xl-12"></div>
                        </div>
                        <div className="col-xl-6">
                            <img className="img-fluid" src={imgGrid01} alt="" />
                        </div>
                    </div>
                </a>
            </div>
                <div className="col-xl-6 pt-5">
                    <a className="" href="">
                        <div className="row mx-0 u-box-yellow u-border-roud-all">
                            <div className="col-xl-6">
                                <div className="col-xl-12">
                                    <span className="u-title-prin-content-white">Cosmetic</span>
                                    <span className="u-title-prin-content-black">Dentistry</span>
                                </div>
                                <div className="col-xl-12">
                                    <span className="text-white u-content-stxt">
                                    Our prices are affordable, 
                                    and we have extensive 
                                    experience treating patients 
                                    looking for a complete 
                                    transformation of their smiles. 
                                    </span>
                                </div>
                                <div className="col-xl-12"></div>
                            </div>
                            <div className="col-xl-6">
                                <img className="img-fluid" src={imgGrid02} alt="" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <Grid/>
        </div>
        </>
    )
}

export default Ugrid