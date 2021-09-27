import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {REGISTRATION} from "../../constants/Route";
import {useState} from "react";
import {passwordValidation, emailValidation} from "../../logic/LoginValidation";

function Login() {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [emailIncorrect, setEmailIncorrect] = useState(false);
    const [passwordIncorrect, setPasswordIncorrect] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleOnClick = (event) => {
        event.preventDefault();
        setPasswordIncorrect(passwordValidation(password));
        setEmailIncorrect(emailValidation(email));
        if (!passwordValidation(password) && !emailValidation(email)){
            setSuccess(true);
        }
    }
        console.log(password.length);
    return (
        <div className='container login-section'>
            <div className='row'>
                <div className='col-lg-6 left-empty'>
                </div>
                <div className='col-lg-6 col-sm-12 right-nav'>
                    <Navigation />
                </div>
            </div>
            <div className='login'>
                <h1 className='login__header'>Zaloguj się</h1>
                <div className='decoration login__decoration'>
                </div>
                <form className='login__form'>
                    <div className='login__form-fields'>
                        <div className="login__form-field">
                            <label className="login__form-label" >
                                Email
                                <input
                                    type="email"
                                    className="login__form-input"
                                    onChange={event => setEmail(event.target.value)}/>
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
                                <input
                                    type="password"
                                    className="login__form-input"
                                    onChange={event => setPassword(event.target.value)}/>
                            </label>
                            {passwordIncorrect &&
                            <div className='login-form-failure'>
                                <p>Podane hasło jest za krótkie!!</p>
                            </div>
                            }
                        </div>
                    </div>
                    <div className='btn login__btn'>
                        <button className='left-btn'><Link to={REGISTRATION} >Załóż konto</Link></button>
                        <input type="submit" value='Zaloguj się' className="btn right-btn" onClick={handleOnClick}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;