import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';
import {LOG_IN, REGISTRATION} from "../constants/Route";

export default function Navigation() {
    let LinkScroll = Scroll.Link;
    return (
        <nav>
            {/*<input type="checkbox" id="menu" className="menu-btn"/>*/}
            {/*<label htmlFor="menu" className="menu-icon"><i className="fas fa-bars"></i></label>*/}
            <ul className='topMenu'>
                <li className='topMenu-item'><Link to={LOG_IN} >Zaloguj</Link></li>
                <li className='topMenu-item'><Link to={REGISTRATION} >Załóż konto</Link></li>
            </ul>
            <ul className='bottomMenu'>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to="headerElement" spy={true} smooth={true}>
                        Start
                    </LinkScroll>
                </li>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to="simpleStepsElement" spy={true} smooth={true}>
                        O co chodzi?
                    </LinkScroll>
                </li>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to="aboutUsElement" spy={true} smooth={true}>
                        O nas
                    </LinkScroll></li>
                <li className='bottomMenu-item'><LinkScroll >Fundacja i organizacje</LinkScroll></li>
                <li className='bottomMenu-item'><LinkScroll >Kontakt</LinkScroll></li>
            </ul>
        </nav>
    )
}