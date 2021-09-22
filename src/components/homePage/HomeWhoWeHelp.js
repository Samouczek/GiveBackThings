import * as Scroll from "react-scroll";
import {Link} from "react-router-dom";
import {LOG_IN} from "../../constants/Route";

export default function HomeWhoWeHelp() {
    let Element = Scroll.Element;
    return (
        <Element name="whoWeHelpElement">
            <div className='container who-we-help'>
                <div className='help-section'>
                    <h2 className='help-title'>Komu pomagamy?</h2>
                    <div className='decoration decoration--who-we-help'> </div>
                    <div className='institutions'>
                        <button className='btn-institution'>Fundacjom</button>
                        <button className='btn-institution'>Organizacjom pozarządowym</button>
                        <button className='btn-institution'>Lokalnym zbiórkom</button>
                    </div>
                    <p className='institutions-info'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>

                </div>
            </div>
        </Element>
    )
}