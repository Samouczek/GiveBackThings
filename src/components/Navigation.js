import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';
import Login from "./loginPage/Login";
import Registration from "./registrationPage/Registration";
import {LOG_IN, REGISTRATION} from "../constants/Route";

export default function Navigation() {
    let LinkScroll = Scroll.Link;
    return (
        <nav>
            <input type="checkbox" id="menu" className="menu-btn"/>
            <label htmlFor="menu" className="menu-icon"><i className="fas fa-bars"></i></label>
            <ul className='topMenu'>
                <li><Link to={LOG_IN} component={Login}>Zaloguj</Link></li>
                <li><Link to={REGISTRATION} component={Registration}>Załóż konto</Link></li>
            </ul>
            <ul className='bottomMenu'>
                <li><LinkScroll >Start</LinkScroll></li>
                <li><LinkScroll >O co chodzi?</LinkScroll></li>
                <li><LinkScroll >O nas</LinkScroll></li>
                <li><LinkScroll >Fundacja i organizacje</LinkScroll></li>
                <li><LinkScroll >Kontakt</LinkScroll></li>
            </ul>
        </nav>
    )
}