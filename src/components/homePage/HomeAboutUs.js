import * as Scroll from "react-scroll";

export default function HomeAboutUs() {
    let Element = Scroll.Element;
    return (
        <Element name="aboutUsElement">
            <div className='container about-us-section'>
                <div className='row'>
                    <div className='about-us-content col-lg-6 col-sm-12'>
                        <h2 className='about-us-title'>O nas</h2>
                        <div className='about-us-image-decoration'> </div>
                        <p className='about-us-text'>
                            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                            black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                        <div className='about-us-signature'> </div>
                    </div>
                    <div  className='about-us-image col-lg-6 col-sm-12'> </div>
                </div>
            </div>
        </Element>
    )
}

