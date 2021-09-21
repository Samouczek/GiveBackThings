import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {LOG_IN} from "../../constants/Route";
import Login from "../loginPage/Login";

export default function HomeHeader() {
    return (
        <div className='container header'>
            <div className='row'>
                <div className='col-lg-6 image-header'>
                </div>
                <div className='col-lg-6 col-sm-12 right-header'>
                    <Navigation />
                    <h1>
                        Zacznij pomagać! <br />
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <div className='image-decoration'>
                    </div>
                    <div className='btns-header'>
                        <button className='btn-home btn-home_header'>
                            <Link to={LOG_IN} >oddaj rzeczy</Link>
                        </button>
                        <button className='btn-home btn-home_header'>
                            <Link to={LOG_IN} >zorganizuj zbiórkę</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}