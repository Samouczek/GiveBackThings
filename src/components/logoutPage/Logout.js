import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {HOME, REGISTRATION} from "../../constants/Route";

function Logout() {
    return (
        <div className='container logout-section'>
            <div className='row'>
                <div className='col-lg-6 left-empty'> </div>
                <div className='col-lg-6 col-sm-12 right-nav'>
                    <Navigation email={false}/>
                </div>
            </div>
            <div className='logout'>
                <h1 className='logout__header'>Wylogowanie nastąpiło <br/>
                        pomyślnie!</h1>
                <div className='decoration logout__decoration'> </div>
                <button className='main-page-btn'>
                    <Link to={HOME}>Strona główna</Link>
                </button>
            </div>
        </div>
    )
}

export default Logout;