import Grid from "../atoms/grid"


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
            <Grid/>
        </div>
        </>
    )
}




export default SimpleGrid