import oldManMobile from "../../../../../assets/img/dental_implants/mobile/oldwoman_mobile.webp"
import { FaCaretRight } from "react-icons/fa6";
const SectionOldWoman = () => {
    return(
        <>
         <div className="container pt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none">
                         <div className="row mx-0">
                             <div className="col-12 px-0">
                                 <img className="img-fluid" src={oldManMobile} alt="unidental-multimedia"   />
                             </div>
                             <div className="col-12 py-5 px-4 u-box-yellow u-border-round-bottom">
                                 <div className="col-12">
                                     <div className="col-12 text-center">
                                         <span className="u-title-prin-m-white">A life-changing smile</span><br/>
                                         <span className="u-title-subTitle">you can afford</span>
                                     </div>
                                     <div className="col-12 pt-4">
                                         <span>
                                             <FaCaretRight /> Dental implants dramatically improve chewing ability and facial appearance, 
                                             while our patients also talk about enhancing their quality of life and boosting 
                                             self-confidence.<br/>
                                             <FaCaretRight /> Single implant and semi-permanent tooth in 24 hours.<br/>
                                             <FaCaretRight /> Full jaw restoration in just 72 hours.<br/>
                                         </span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
        </>
    )
}




export default SectionOldWoman