import * as Scroll from "react-scroll";
import {useState} from "react";
import {emailValidation, messageValidation, nameValidation} from "../../logic/FormValidation";
import {postForm} from "../../api/postForm";

export default function HomeContactUs() {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);
    let Element = Scroll.Element;

    const handleOnClick = (event) => {
        event.preventDefault();
        if (nameValidation(name) === 0 && emailValidation(email) === 0 && messageValidation(message) === 0){
            const data = {
                name: name,
                email: email,
                message: message
            };
            postForm(data);
        }
    }
    return (
        <Element name="contactUsElement">
            <div className='container contact-us-section'>
                <div className='row'>
                    <div  className='contact-us-image col-md-6 col-sm-12'> </div>
                    <div className='contact-us-content col-md-6 col-sm-12'>
                        <h2 className='contact-us-title'>Skontaktuj się z nami</h2>
                        <div className='decoration decoration--contact-us'> </div>
                        <form className='contact-us-form'>
                            <div className="form__field">
                                <label className="form__label" >
                                    Wpisz swoje imię
                                    <input
                                        type="text"
                                        className="form__input name"
                                        placeholder='Krzysztof'
                                        onChange={event => setName(event.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="form__field">
                                <label className="form__label">
                                    Wpisz swój email
                                    <input
                                        type="email"
                                        className="form__input email"
                                        placeholder='abc@xyz.pl'
                                        onChange={event => setEmail(event.target.value)}
                                    />
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
                                        onChange={event => setMessage(event.target.value)}
                                    />
                                </label>
                            </div>
                            <input type="submit" value='Wyślij' className="btn btn--submit" onClick={handleOnClick}/>
                        </form>
                        <div className='about-us-signature'> </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}