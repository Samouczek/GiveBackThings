import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {LOG_IN, REGISTRATION} from "../../constants/Route";
import {emailValidation, passwordAgainValidation, passwordValidation} from "../../logic/LoginValidation";
import {useState} from "react";

function Registration() {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [passwordAgain, setPasswordAgain] = useState(false);
    const [emailIncorrect, setEmailIncorrect] = useState(false);
    const [passwordIncorrect, setPasswordIncorrect] = useState(false);
    const [passwordAgainIncorrect, setPasswordAgainIncorrect] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleOnClick = (event) => {
        event.preventDefault();
        setEmailIncorrect(emailValidation(email));
        setPasswordIncorrect(passwordValidation(password));
        setPasswordAgainIncorrect(passwordAgainValidation(password, passwordAgain));
        if (!passwordValidation(password) && !emailValidation(email) && !passwordAgainValidation(passwordAgain)){
            setSuccess(true);
        }
    }
    return (
        <div className='container registration-section'>
            <div className='row'>
                <div className='col-lg-6 left-empty'>
                </div>
                <div className='col-lg-6 col-sm-12 right-nav'>
                    <Navigation />
                </div>
            </div>
            <div className='login'>
                <h1 className='login__header'>Załóż konto</h1>
                <div className='decoration login__decoration'>
                </div>
                <form className='login__form'>
                    <div className='login__form-fields'>
                        <div className="login__form-field">
                            <label className="login__form-label" >
                                Email
                                <input type="email" className="login__form-input"/>
                            </label>
                            {emailIncorrect &&
                            <div className='login-form-failure'>
                                <p>Podany email jest nieprawidłowy!</p>
                            </div>
                            }
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">
                                Hasło
                                <input type="password" className="login__form-input"/>
                            </label>
                            {passwordIncorrect &&
                            <div className='login-form-failure'>
                                <p>Podane hasło jest za krótkie!!</p>
                            </div>
                            }
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">
                                Powtórz hasło
                                <input type="password" className="login__form-input"/>
                            </label>
                            {passwordAgainIncorrect &&
                            <div className='login-form-failure'>
                                <p>Podane hasło musi być identyczne jak poprzednie!!</p>
                            </div>
                            }
                        </div>
                    </div>
                    <div className='btn login__btn'>
                        <button className='left-btn'><Link to={LOG_IN} >Zaloguj się</Link></button>
                        <input type="submit" value='Załóż konto' className="btn right-btn" onClick={handleOnClick}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;