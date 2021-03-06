import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {HAND_OVER_THINGS, LOG_IN} from "../../constants/Route";
import Login from "../loginPage/Login";
import * as Scroll from "react-scroll";

export default function HomeHeader({userEmail}) {
    let Element = Scroll.Element;
    return (
        <Element name="headerElement">
            <div className='container header'>
                <div className='row'>
                    <div className='col-lg-6 image-header'>
                    </div>
                    <div className='col-lg-6 col-sm-12 right-header'>
                        <Navigation email={userEmail}/>
                        <h1>
                            Zacznij pomagać! <br />
                            Oddaj niechciane rzeczy w zaufane ręce
                        </h1>
                        <div className='decoration decoration--header'>
                        </div>
                        <div className='btns-header'>
                            <button className='btn-home btn-home_header'>
                                {userEmail ? <Link to={HAND_OVER_THINGS} >oddaj rzeczy</Link>
                                    : <Link to={LOG_IN} >oddaj rzeczy</Link>}
                            </button>
                            <button className='btn-home btn-home_header'>
                                <Link to={LOG_IN} >zorganizuj zbiórkę</Link>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Element>
    )
}