import oldWomanPic from "../../../../assets/img/old_woman.png"
import { FaCaretRight } from "react-icons/fa6";
import  Monophasic_Basal_Implants from "../../../../assets/img/Monophasic_Basal_Implants.png"
import just72_01 from "../../../../assets/img/dental_implants/just72_01.png"
import just72_02 from "../../../../assets/img/dental_implants/just72_02.png"
import just72_03 from "../../../../assets/img/dental_implants/just72_03.png"
import just72_04 from "../../../../assets/img/dental_implants/just72_04.png"
import just72_05 from "../../../../assets/img/dental_implants/just72_05.png"
import howWork from "../../../../assets/img/dental_implants/how_work.png"
import step_01 from "../../../../assets/img/dental_implants/step_01.png"
import step_02 from "../../../../assets/img/dental_implants/step_02.png"
import step_03 from "../../../../assets/img/dental_implants/step_03.png"
import step_04 from "../../../../assets/img/dental_implants/step_04.png"
import step_05 from "../../../../assets/img/dental_implants/step_05.png"
import postSamano from "../../../../assets/img/dental_implants/post_samano.png"
import drSamano from "../../../../assets/img/dental_implants/Dr_samano_Brooks.png"
import differencesBetween from "../../../../assets/img/dental_implants/differences_between.png"
import conventionalImplants from "../../../../assets/img/dental_implants/conventional_implants.png"
import meat from "../../../../assets/img/dental_implants/meat.png"
import SimpleGrid from "../../../atoms/simpleGrid";
import SectionOldWoman from "./implantsMobile/sectionOldWoman";
import SectionBasalMobile from "./implantsMobile/SectionBasal";
import SectionMeatMobile from "./implantsMobile/sectionMeatMobile";

const SectionBodyDental = () => {
    return(
        <>
            <div className="container pt-5">
                <div className="col-xl-12">
                    <div className="col-xl-12 text-center">
                        <span className="u-title-prin-content">Are you tired of worrying about the state</span>
                    </div>
                    <div className="col-xl-12 text-center">
                        <span className="u-content-stxt"> of your teeth or having  your dentures come loose<br/> 
                        at the worst possible time?</span>
                    </div>
                </div>
            </div>
            {/* old woman section  */}
            <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="row mx-0">
                    <div className="col-xl-4 px-0">
                        <img className="img-fluid" src={oldWomanPic} alt="unidental-multimedia"   />
                    </div>
                    <div className="col-xl-8 px-0 u-box-yellow u-border-roud-right">
                        <div className="col-xl-12">
                            <div className="col-xl-12 text-center">
                                <span className="u-title-prin-content-white">A life-changing smile</span><br/>
                                <span className="u-title-subTitle">you can afford</span>
                            </div>
                            <div className="col-xl-12 px-5 pt-4">
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
            <SectionOldWoman/>
            {/* end old woman section */}

            {/* section  Monophasic Basal Implants */}
            <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block ">
                <div className="row mx-0 pt-5">
                    <div className="col-xl-7 u-box-yellow u-border-roud-all">
                        <div className="col-xl-12 p-5">
                            <div className="col-xl-12 text-center">
                                <span className="u-title-prin-content-white">Dental Restorations Using </span><br/>
                                <span className="u-title-subTitle"> Monophasic Basal Implants</span>
                            </div>
                            <div className="col-xl-12 pt-4">
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
                    <div className="col-xl-5 u-box-float ">
                        <img className="img-fluid u-img-float u-border-roud-all " src={Monophasic_Basal_Implants}  alt="" />
                    </div>
                </div>
            </div>
            <SectionBasalMobile/>
            {/* end section  Monophasic Basal Implants */}

            {/* Same Day Implants  */}
                <div className="container pt-5">
                    <div className="row mx-0">
                        <div className="col-12 col-xl-6 pt-5">
                           <div className="col-xl-12">
                                <div className="col-xl-12 u-box-yellow u-border-round-top">
                                    <video className="u-border-round-top" width="100%"  autoplay >
                                        <source src="https://unidental.com.mx/img/Basal.mp4" type="video/mp4"  />
                                    </video>
                                </div>
                                {/* desktop version */}
                                <div className="col-xl-12 d-none d-sm-none d-md-none d-lg-block d-xl-block u-box-yellow u-just-box u-border-round-bottom">
                                    <div className="col-xl-12 text-center pt-4 ">
                                        <span className="u-title-prin-content-white">Same Day Implants </span><br/>
                                        <span className="u-title-subTitle">and Teeth </span>
                                    </div>
                                    <div className="col-xl-12 px-4 py-5">
                                        <span className="">
                                        Basal Dental Implants are also one-piece implants that 
                                        are placed deeper into the bone, anchored in the strong 
                                        cortical bone and are immediately stable to rehabilitate 
                                        immediate prostheses such as crowns, dental bridges 
                                        the same day or fixed dentures in 48 to 72 hours and are 
                                        ideal for patients with severe bone atrophy.
                                        </span>
                                    </div>
                                </div>
                                {/* end desktop version */}
                                {/* mobile version */}
                                <div className="col-12 d-block d-sm-block d-md-block d-lg-none d-xl-none u-box-yellow u-border-round-bottom">
                                    <div className="col-12 text-center pt-4 ">
                                        <span className="u-title-prin-content-white">Same Day Implants </span><br/>
                                        <span className="u-title-subTitle">and Teeth </span>
                                    </div>
                                    <div className="col-12 px-4 py-5">
                                        <span className="">
                                        Basal Dental Implants are also one-piece implants that 
                                        are placed deeper into the bone, anchored in the strong 
                                        cortical bone and are immediately stable to rehabilitate 
                                        immediate prostheses such as crowns, dental bridges 
                                        the same day or fixed dentures in 48 to 72 hours and are 
                                        ideal for patients with severe bone atrophy.
                                        </span>
                                    </div>
                                </div>
                                {/* end mobile version */}
                           </div>
                        </div>
                        <div className="col-12 col-xl-6 pt-5">
                           <div className="col-xl-12">
                                <div className="col-xl-12 u-box-grey-one u-border-round-top">
                                    <video className="u-border-round-top" width="100%"  autoplay >
                                        <source src="https://unidental.com.mx/img/new_video.mp4" type="video/mp4"  />
                                    </video>
                                </div>
                                <div className="col-xl-12 u-box-grey-one u-border-round-bottom">
                                    <div className="col-xl-12 text-center pt-4 ">
                                        <span className="u-title-prin-content-white">Some reasons to prefer </span><br/>
                                        <span className="u-title-subTitle">Monophasic Basal Implant: </span>
                                    </div>
                                    <div className="col-xl-12 px-4 py-5">
                                        <span className="">
                                        <FaCaretRight /> Immediate results<br/>
                                        <FaCaretRight />  Fewer dental visits<br/>
                                        <FaCaretRight /> Fast recovery time<br/>
                                        <FaCaretRight /> Teeth are secure like your natural teeth<br/>
                                        <FaCaretRight /> Lower costs<br/>
                                        <FaCaretRight /> Fewer errors and risks<br/>
                                        <FaCaretRight /> Possible even for patients with little bone or <br/>
                                        systemically compromised<br/>
                                        <FaCaretRight />Look, feel and function just like natural teeth
                                        </span>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            {/* end Same Day Implants  */}
            {/* just 72 */}
            <div className="container pt-5">
                <div className="row mx-0">
                    <div className="col-12 col-xl-12 pb-5">
                        <span className="u-title-prin-content">Go home with fixed teeth</span><br/>
                        <span className="u-title-subTitle"> in just 72 hrs!</span>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block col-xl-1"></div>
                    <div className="col-12 col-xl-2 pt-5 ">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={just72_01}  alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-2 pt-5">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={just72_02}  alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-2 pt-5">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={just72_03}  alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-2 pt-5">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={just72_04}  alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-2 pt-5">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={just72_05}  alt=""/>
                        </div>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block col-xl-1"></div>
                    <div className="col-xl-12 text-center pt-5">
                        <span>
                        Our Immediate Loading Protocol through Basal implants are primarily designed to make<br/>
                        dental restoration possible for almost every patient.<br/><br/>

                        There is no need to wait through a long recovery, with the help of our dental technicians, your new<br/> 
                        full set of teeth will be fixed in place within <b>72 hours</b> straight after the implants have been inserted.</span>
                    </div>
                </div>
            </div>
            {/* end just 72 */}

            {/* how does it work */}
            <div className="container pt-5">
                    <div className="row mx-0">
                        <div className="col-12 col-xl-6 pt-5">
                           <div className="col-xl-12">
                                <div className="col-xl-12 u-box-yellow  u-border-round-top">
                                    <img className="img-fluid  u-border-round-top" src={howWork} alt="" />
                                </div>
                                <div className="col-xl-12 u-box-yellow u-just-box_02 u-border-round-bottom">
                                    <div className="col-xl-12 text-center pt-4 ">
                                        <span className="u-title-prin-content-white">How does it work? </span><br/>
                                        <span className="u-title-subTitle">The solution of Basal Implants </span>
                                    </div>
                                    <div className="col-xl-12 px-4 py-5">
                                        <span className="">
                                        They are types of dental implants that are placed deeper 
                                        into the bone (basal and cortical bone), even if there is 
                                        severe bone loss. <br/><br/>

                                        This gives strong stability immediately 
                                        after the implantation, enabling the rehabilitation of 
                                        immediate prostheses such as crowns, dental bridges, 
                                        or fixed dentures within the first 72 hours.
                                        </span>
                                    </div>
                                </div>
                           </div>
                        </div>
                        <div className="col-12 col-xl-6 pt-5">
                           <div className="col-xl-12">
                                <div className="col-xl-12 u-box-grey-one u-border-round-top">
                                    <video className="u-border-round-top" width="100%"  autoplay >
                                        <source src="https://unidental.com.mx/img/Compressive.mp4" type="video/mp4"  />
                                    </video>
                                </div>
                                <div className="col-xl-12 u-box-grey-one u-border-round-bottom">
                                    <div className="col-xl-12 text-center pt-4 ">
                                        <span className="u-title-prin-content-white">Strategic Implant  </span><br/>
                                        <span className="u-title-subTitle">Advantages</span>
                                    </div>
                                    <div className="col-xl-12 px-4 py-5">
                                        <span className="">
                                        Basal implants offer many advantages over conventional
                                        implants, including faster healing times, greater stability, 
                                        and reduced surgical procedures.<br/><br/>

                                        Patients with limited or atrophic maxillary bone often face 
                                        difficulty obtaining fixed teeth with traditional dental implants. 
                                        However, these patients can achieve perfect fixed teeth with 
                                        basal implants, without the need for additional surgical 
                                        procedures.<br/><br/>

                                        Patients with medical conditions such as diabetes, heart 
                                        problems, bone deformities, and even smokers can also 
                                        benefit from permanent fixed teeth through basal implants.
                                        </span>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                {/* end how does it work */}

                {/* Step-by-Step Procedure */}
                <div className="container pt-5">
                    <div className="col-xl-12 u-box-yellow u-border-roud-all">
                        <div className="col-xl-12 p-5">
                            <span className="u-title-prin-content-white">Step-by-Step Procedure</span>
                        </div>
                        <div className="col-xl-12">
                            <div className="row mx-0">
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12">
                                        <span className="u-title-subTitle">Initial Consultation</span>
                                    </div>
                                    <div className="col-xl-12 pt-4">
                                        <span>
                                        <FaCaretRight /> This includes the clinical history, taking of x-rays, tomography, clinical 
                                        photographs, and dental models.<br/><br/>

                                        <FaCaretRight /> This will allow us to establish a diagnosis and an individualized treatment 
                                        plan for the case.<br/><br/>


                                        <FaCaretRight /> This initial phase is important to determine the conditions of the existing 
                                        bone where the implants would be placed.
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12 pt-5">
                                        <img className="img-fluid" src={step_01} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0 pt-5">
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12">
                                        <span className="u-title-subTitle">Surgical Protocol</span>
                                    </div>
                                    <div className="col-xl-12 pt-4">
                                        <span>
                                        <FaCaretRight /> Treatment begins with the extraction of teeth (if necessary) and the insertion
                                                of implants.<br/><br/>

                                        <FaCaretRight /> The entire treatment usually lasts between 2.5 and 3 hours, during which 
                                                local anesthesia and intravenous sedation on request are used.<br/><br/>

                                        <FaCaretRight /> Then, records of the implants placed are taken to the dental laboratory 
                                                for preparation of the new teeth
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12 pt-5">
                                        <img className="img-fluid" src={step_02} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0 pt-5">
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12">
                                        <span className="u-title-subTitle">24 Hours</span>
                                    </div>
                                    <div className="col-xl-12 pt-4">
                                        <span>
                                        <FaCaretRight /> The next day, you must return for the first fitting of the elements of the 
                                        fixed dental bridge. This appointment lasts no more than an hour in most 
                                        cases.<br/><br/>

                                        <FaCaretRight /> In the case of a single implant, the new semi-permanent crown will be 
                                        placed on this second day as a normal delivery.
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12 pt-5">
                                        <img className="img-fluid" src={step_03} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0 pt-5">
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12">
                                        <span className="u-title-subTitle">48 Hours</span>
                                    </div>
                                    <div className="col-xl-12 pt-4">
                                        <span>
                                        <FaCaretRight /> Final test of the new teeth, where color, size, fit, and occlusion 
                                                (bite) will be evaluated.<br/><br/>

                                        <FaCaretRight /> The average time for this appointment is 1-1.5 hours
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12 pt-5">
                                        <img className="img-fluid" src={step_04} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0 pt-5 pb-5">
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12">
                                        <span className="u-title-subTitle">72 Hours</span>
                                    </div>
                                    <div className="col-xl-12 pt-4">
                                        <span>
                                        <FaCaretRight /> The moment you have been waiting for has arrived!<br/><br/>

                                        <FaCaretRight /> During this time, the semi-permanent bridge will be cemented to 
                                        your implants, and you will be ready to show off a spectacular 
                                        new smile.
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-6 px-5">
                                    <div className="col-xl-12 pt-5">
                                        <img className="img-fluid" src={step_05} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Step-by-Step Procedure */}
                {/* Post-treatment follow-ups */}
                <div className="container pt-5">
                <div className="row mx-0">
                    <div className="col-12 col-xl-7 pt-5 u-box-yellow u-border-roud-all">
                        <div className="col-xl-12 p-5">
                            <div className="col-xl-12 text-center">
                                <span className="u-title-prin-content-white">Post-treatment follow-ups </span><br/>
                                <span className="u-title-subTitle"> and permanent teeth</span>
                            </div>
                            <div className="col-xl-12 pt-4">
                                <span>
                                <b>While patients can eat and smile happily with fixed teeth after the 
                                first treatment, post-treatment care and follow-ups are extremely 
                                important:</b><br/><br/>
                                <FaCaretRight /> From the fourth month after treatment, those cases of single implants 
                                must return to the clinic for follow-up evaluation and placement of their 
                                permanent zirconium crown.<br/><br/>

                                <FaCaretRight /> From the sixth month onwards, patients with full arch rehabilitations must 
                                return for evaluation and placement of the definitive fixed bridge, which 
                                may be acrylic or zirconium, depending on the particular case.<br/><br/>

                                <FaCaretRight /> Depending on the condition in which the patient arrived at the initial 
                                consultation, some patients may have to continue waiting up to 1 year 
                                after implantation for their permanent teeth.
                                </span> 
                            </div>
                        </div>
                    </div>
                    {/* desktop version */}
                    <div className="col-xl-5 pt-5 u-box-float d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <img className="img-fluid u-img-float u-border-roud-all " src={postSamano}  alt="" />
                    </div>
                    {/* end desktop version */}
                    {/* version mobile */}
                    <div className="col-12 pt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <img className="img-fluid  u-border-roud-all " src={postSamano}  alt="" />
                    </div>
                    {/* end version mobile */}
                </div>
            </div>
            {/* end Post-treatment follow-ups */}
            {/* samano info */}
            <div className="container pt-5">
                <div className="row mx-0">
                    <div className="col-xl-4">
                    <img className="img-fluid" src={drSamano} alt="" />
                    </div>
                    <div className="col-xl-8">
                        <div className="col-xl-12">
                            <div className="col-xl-12 text-center">
                            <span className="u-title-prin-content">Who performs the procedure? </span>
                            </div>
                            <div className="col-xl-12">
                            <span >The treatment is carried out by<b> Dr. Rolando Samano Brooks</b>, 
                                    who has <b>more than 30 years of experience in dental practice 
                                    and more than 10 years as a Dental Implantologist</b>, graduated 
                                    from the National University of 
                                    Mexico (UNAM).<br/><br/>

                                    He is certified by the International Team of Modern Monolithic Implantology, 
                                    an elite international organization that brings together top specialists from 16 
                                    countries in the field of modern monolithic implantology, and is one of the few 
                                    to use this Monophasic Basal Implant technique in the area. Dr. Samano is 
                                    the main dentist and owner of the Unidental clinic.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end samano info */}
            {/* Differences between basal implant */}
            <div className="container pt-5">
                <div className="row mx-0 u-box-grey-two">
                    <div className="col-xl-6">
                        <div className="col-xl-12">
                            <div className="col-xl-12 pt-5 px-5 text-center">
                            <span className="u-title-prin-content-white">Differences between basal implant  </span><br/>
                            <span className="u-title-subTitle u-color-text-yellow"> & Conventional Dental Implant</span>
                            </div>
                            <div className="col-xl-12 px-5 py-5">
                                <span className="text-white">
                                <FaCaretRight /> Basal implants, being a single piece, do not require multiple attachments 
                                    that make up the traditional biphasic implant.<br/><br/>

                                    <FaCaretRight /> The basal implant does not require a bone graft even when there is a lack 
                                    of bone.<br/><br/>

                                    <FaCaretRight /> The basal implant is placed in the 2nd layer of the cortical bone. Therefore, 
                                    its name is a bi-cortical implant. The conventional dental implant is placed in
                                    the spongy part of the bone, the alveolar bone.<br/><br/>

                                    <FaCaretRight /> The basal implant is said to be immediate, it can be placed immediately 
                                    after tooth extraction and its prosthesis is fixed within 72 hours of placing 
                                    the basal implant.<br/><br/>

                                    <FaCaretRight /> Conventional dental implants require a period of osseointegration of 3 to 4 
                                    months before placing the prosthesis fixed.<br/><br/>

                                    <FaCaretRight /> The basal implant can easily be removed or corrected. The classic dental 
                                    implant is very complex to be extracted. Its removal leads to the destruction 
                                    of an important bone mass.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="col-xl-12 px-5 pt-5 pb-5">
                            <img className="img-fluid" src={differencesBetween}  alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end Differences between basal implant   */}
            {/* Conventional Dental Implants */}
            <div className="container pt-5">
                    <div className="row mx-0">
                        <div className="col-xl-12 py-5">
                            <span className="u-title-prin-content">Conventional Dental Implants</span>
                        </div>
                        <div className="col-12 col-xl-6">
                           <div className="col-xl-12">
                                <div className="col-xl-12 u-box-grey-one   u-border-round-top">
                                    <video className="u-border-round-top" width="100%"  autoplay >
                                        <source src="https://unidental.com.mx/img/convencional_dental.mp4" type="video/mp4"  />
                                    </video>
                                </div>
                                <div className="col-xl-12 u-box-grey-one  u-border-round-bottom">
                                    <div className="col-xl-12 text-center pt-4 ">
                                        <span className="u-title-subTitle">Improve Your Quality of Life</span><br/>
                                        <span className="u-title-subTitle">With All-on-X dental Implants </span>
                                    </div>
                                    <div className="col-xl-12 px-4 py-5">
                                        <span className="">
                                        All-on-X dental implant is a dental procedure that replaces 
                                        a full row of teeth with four dental implants and a fixed 
                                        prosthesis. <br/><br/>
                                        It’s also known as All-on-Four or All-in-Six, 
                                        depending on the number of implants required in the 
                                        treatment<br/><br/><br/><br/><br/>
                                        </span>
                                    </div>
                                </div>
                           </div>
                        </div>
                        <div className="col-12 col-xl-6 pt-5">
                           <div className="col-xl-12">
                                <div className="col-xl-12 u-box-grey-one u-border-round-top">
                                    <img className="img-fluid" src={conventionalImplants}  alt=""/>
                                </div>
                                <div className="col-xl-12 u-box-grey-one u-border-round-bottom">
                                    <div className="col-xl-12 text-center pt-4 ">
                                        <span className="u-title-subTitle">Placement Conventional</span><br/>
                                        <span className="u-title-subTitle">Implants</span>
                                    </div>
                                    <div className="col-xl-12 px-4 py-5">
                                        <span className="">
                                        The advancement of new technologies allows more predictable, 
                                        successful and less invasive procedures, allowing us to place 
                                        dental implants in the exact and most convenient place in the 
                                        arch.<br/><br/>
                                        The intervention is previously planned with the help of a computer 
                                        and 3D technology.<br/><br/>
                                        This procedure has a number of advantages over traditional 
                                        surgery.
                                        </span>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                {/* end Conventional Dental Implants */}
                {/* banner meat */}
                <div className="container pt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <div className="row mx-0">
                        <div className="col-xl-8 u-box-yellow u-border-roud-left">
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
                                <div className="col-xl-12 pt-3">
                                    <a className="u-button-black" href="" >Contact Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 px-0">
                            <img className="img-fluid" src={meat} alt="" />
                        </div>
                    </div>
                </div>
                <SectionMeatMobile/>
                {/* end banner meat */}
                <SimpleGrid/>
        </>
    )
}


export default SectionBodyDental;