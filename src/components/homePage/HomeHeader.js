import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import {LOG_IN} from "../../constants/Route";
import Login from "../loginPage/Login";

export default function HomeHeader() {
    return (
        <div className='container header'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='../../assets/Home-Hero-Image.jpg' alt='box with things' />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <Navigation />
                    <h1>
                        Zacznij pomagać! <br />
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <img src='../../assets/Decoration.svg' alt='decoration' />
                    <button className='btn-home btn-home_header'>
                        <Link to={LOG_IN} component={Login}>oddaj rzeczy</Link>
                    </button>
                    <button className='btn-home btn-home_header'>
                        <Link to={LOG_IN} component={Login}>zorganizuj zbiórkę</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}