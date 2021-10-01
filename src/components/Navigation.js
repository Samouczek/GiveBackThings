import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';
import {HAND_OVER_THINGS, HOME, LOG_IN, LOG_OUT, REGISTRATION} from "../constants/Route";
import {useState} from "react";

export default function Navigation({email}) {
    const [emailLogin, setEmailLogin] = useState(email);
    console.log(emailLogin);

    let LinkScroll = Scroll.Link;
    return (
        <nav>
            {/*<input type="checkbox" id="menu" className="menu-btn"/>*/}
            {/*<label htmlFor="menu" className="menu-icon"><i className="fas fa-bars"></i></label>*/}
            <ul className='topMenu'>
                {emailLogin && <li className='topMenu-item topMenu-item--email'>Cześć {emailLogin}!</li>}
                <li className = {emailLogin ? 'topMenu-item topMenu-item--give' : "topMenu-item "}>
                    {emailLogin  ?
                        <Link to={HAND_OVER_THINGS} >Oddaj rzeczy</Link> :
                        <Link to={LOG_IN} >Zaloguj</Link>}

                </li>
                <li className='topMenu-item'>
                    {emailLogin  ? <Link to={LOG_OUT} >Wyloguj</Link> :<Link to={REGISTRATION} >Załóż konto</Link>}
                </li>
            </ul>
            <ul className='bottomMenu'>
                <li className='bottomMenu-item'>
                    <Link to={HOME} >
                        Start
                    </Link>
                </li>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to="simpleStepsElement" spy={true} smooth={true}>
                        O co chodzi?
                    </LinkScroll>
                </li>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to="aboutUsElement" spy={true} smooth={true}>
                        O nas
                    </LinkScroll>
                </li>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to='whoWeHelpElement' spy={true} smooth={true}>
                        Fundacja i organizacje
                    </LinkScroll>
                </li>
                <li className='bottomMenu-item'>
                    <LinkScroll activeClass="active" to='contactUsElement' spy={true} smooth={true}>
                        Kontakt
                    </LinkScroll>
                </li>
            </ul>
        </nav>
    )
}