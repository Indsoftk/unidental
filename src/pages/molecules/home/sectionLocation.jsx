import logoUnidental from "../../../assets/img/uni-log.png"
import { FaPhone } from "react-icons/fa6";
import SectionMapHome from "../../../mobile/molecules/homeMobile/sectionMapHome";
const SectionLocation = () => {
    return(
        <>
        <div className="container py-5">
            <div className="row mx-0">
                <div className="col-xl-6">
                    <SectionMapHome/>
                </div>
                <div className="col-xl-6">
                    <div className="col-xl-12">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={logoUnidental} alt="unidental logo" />
                        </div>
                        <div className="col-xl-12 pt-5">
                            <span className="u-title-solid-black">Unidental Matamoros</span>
                        </div>
                        <div className="col-xl-12">
                            Calle Primera #267<br/>
                            Between Rosas and Nardos<br/>
                            Colonia Jardín<br/>
                            H. Matamoros, Tamaulipas. Mexico<br/>
                            C.P. 87330<br/>
                            Ph: <span className="u-color-text-yellow u-bold">(956) 465-4231</span> & <span className="u-color-text-yellow u-bold">238-4949</span><br/>
                            MX Ph: <span className="u-color-text-yellow u-bold">+52 (868)813-0482</span> & <span className="u-color-text-yellow u-bold">+52 (868)812-5607</span>
                        </div>
                        <div className="col-xl-12 pt-4">
                            <a className="u-button" href="tel:+19564654231"> <FaPhone /> (956) 465-4231</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default SectionLocation