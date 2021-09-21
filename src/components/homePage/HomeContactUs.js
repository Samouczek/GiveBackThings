import * as Scroll from "react-scroll";

export default function HomeContactUs() {
    let Element = Scroll.Element;
    return (
        <Element name="contactUsElement">
            <div className='container contact-us-section'>
                <div className='row'>
                    <div  className='contact-us-image col-lg-7 col-md-6 col-sm-12'> </div>
                    <div className='contact-us-content col-lg-5 col-md-6 col-sm-12'>
                        <h2 className='contact-us-title'>Skontaktuj się z nami</h2>
                        <div className='contact-us-image-decoration'> </div>
                        <form className='contact-us-form'>
                            <div className="form__field">
                                <label className="form__label" >
                                    Wpisz swoje imię
                                    <input type="text" className="form__input name" placeholder='Krzysztof'/>
                                </label>
                            </div>
                            <div className="form__field">
                                <label className="form__label">
                                    Wpisz swój email
                                    <input type="email" className="form__input email" placeholder='abc@xyz.pl'/>
                                </label>
                            </div>
                            <div className="form__field">
                                <label className="form__label">
                                    Wpisz swoją wiadomość
                                    <textarea
                                        className="form__input message"
                                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.'
                                    />
                                </label>
                            </div>
                            <input type="submit" value='Wyślij' className="btn btn--primary"/>
                        </form>
                        <div className='about-us-signature'> </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}