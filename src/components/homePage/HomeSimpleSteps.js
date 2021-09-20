import {Link} from "react-router-dom";
import {LOG_IN} from "../../constants/Route";

export default function HomeSimpleSteps() {
    return (
        <div className='container'>
            <div className='steps-section'>
                <h2 className='steps-title'>Wystarczą 4 proste kroki</h2>
                <div className='image-steps-decoration'> </div>
                <div className='row steps'>
                    <div className='step step--first col-md-3 col-sm-12'>
                        <p className='step-title'>Wybierz rzeczy</p>
                        <div className='step-line'>          </div>
                        <p className='step-text'>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='step step--second col-md-3 col-sm-12'>
                        <p className='step-title'>Spakuj je</p>
                        <div className='step-line'> </div>
                        <p className='step-text'>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='step step--third col-md-3 col-sm-12'>
                        <p className='step-title'>Zdecyduj komu chcesz pomóc</p>
                        <div className='step-line'> </div>
                        <p className='step-text'>wybierz zaufane miejsce</p>
                    </div>
                    <div className='step step--fourth col-md-3 col-sm-12'>
                        <p className='step-title'>Zamów kuriera</p>
                        <div className='step-line'> </div>
                        <p className='step-text'>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <button className='btn-steps'>
                    <Link to={LOG_IN} >oddaj rzeczy</Link>
                </button>
            </div>
        </div>
    )
}