import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {LOG_IN, REGISTRATION} from "../../constants/Route";

function Login() {
    return (
        <div className='container login'>
            <div className='row'>
                <div className='col-lg-6 left-empty'>
                </div>
                <div className='col-lg-6 col-sm-12 right-nav'>
                    <Navigation />
                </div>
            </div>
            <div className='login'>
                <h1 className='login__header'>Zaloguj</h1>
                <div className='decoration login__decoration'>
                </div>
                <form className='login__form'>
                    <div className="login__form-field">
                        <label className="login__form-label" >
                            Email
                            <input type="email" className="login__form-input"/>
                        </label>
                    </div>
                    <div className="login__form-field">
                        <label className="login__form-field">
                            Hasło
                            <input type="password" className="login__form-input"/>
                        </label>
                    </div>
                    <div className='btn login__btn'>
                        <button><Link to={REGISTRATION} >Załóż konto</Link></button>
                        <input type="submit" value='Zaloguj się' className="btn btn--submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;