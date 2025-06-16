import { FaCaretRight } from "react-icons/fa6";
import basalMobilePic from "../../../../../assets/img/dental_implants/mobile/basal_mobile.png"
const SectionBasalMobile = () => {
return (
    <>
        <div className="container pt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div className="row mx-0">
                <div className="col-12 px-0">
                    <img className="img-fluid" src={basalMobilePic}  alt="" />
                </div>
                <div className="col-12 u-box-yellow u-border-round-bottom">
                    <div className="col-12 px-3">
                        <div className="col-12 text-center">
                            <span className="u-title-prin-m-white">Dental Restorations Using </span><br/>
                            <span className="u-title-subTitle"> Monophasic Basal Implants</span>
                        </div>
                        <div className="col-12 py-4">
                            <span>
                            <FaCaretRight /> Monophasic or single-piece implants are the solution for those seeking 
                            a perfect smile in the shortest possible time.<br/><br/>
                            <FaCaretRight /> Using an advanced technique, these implants are fixed directly to the 
                            base of the bone, eliminating the need for additional procedures, such 
                            as bone grafts.
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
 )
}




export default SectionBasalMobile