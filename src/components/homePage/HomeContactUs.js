import * as Scroll from "react-scroll";
import {useState} from "react";
import {postForm} from "../../api/postForm";
import {emailValidation, messageValidation, nameValidation} from "../../logic/FormValidation";

export default function HomeContactUs() {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);
    const [nameIncorrect, setNameIncorrect] = useState(false);
    const [emailIncorrect, setEmailIncorrect] = useState(false);
    const [messageIncorrect, setMessageIncorrect] = useState(false);
    const [success, setSuccess] = useState(false);
    let Element = Scroll.Element;

    const handleOnClick = (event) => {
        event.preventDefault();
        setNameIncorrect(nameValidation(name));
        setEmailIncorrect(emailValidation(email));
        setMessageIncorrect(messageValidation(message));
        if (!nameValidation(name) && !emailValidation(email) && !messageValidation(message)){
            const data = {
                name: name,
                email: email,
                message: message
            };
            postForm(data);
            setSuccess(true);
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
                        { success &&
                            <div className='contact-us-success'>
                                <p>
                                    Wiadomość została wysłana! <br />
                                    Wkrótce się skontaktujemy.
                                </p>
                            </div>
                        }
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
                                {nameIncorrect &&
                                    <div className='form-failure'>
                                        <p>Podane imię jest nieprawidłowe!</p>
                                    </div>
                                }
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
                                {emailIncorrect &&
                                    <div className='form-failure'>
                                        <p className='form-error'>Podany email jest nieprawidłowy!</p>
                                    </div>
                                }
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
                                {messageIncorrect &&
                                    <div className='form-failure'>
                                        <p className='form-error'>Wiadomość musi mieć conajmniej 120 znaków!</p>
                                    </div>
                                }
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