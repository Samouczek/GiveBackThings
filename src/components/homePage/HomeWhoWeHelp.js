import * as Scroll from "react-scroll";
import {foundations, nonGovernmentalOrganizations,localCollection} from "../../constants/Institution";
import {useState} from "react";
import InstitutionsDisplay from "../atoms/InstitutionsDisplay";

export default function HomeWhoWeHelp() {
    const [data, setData] = useState(foundations);
    const [pages, setPages] = useState([1,2]);

    let Element = Scroll.Element;

    const handleOnClickFoundations = (event) => {
        event.preventDefault();
        setData(foundations);
        setPages([]);
        for (let i = 1; i <= Math.floor(foundations.length/3); i++) {
            setPages(prev => {
                console.log("prev: ",prev);
                prev.push(i)});
        };
    }

    const handleOnClickNonGovernmentalOrganizations = (event) => {
        event.preventDefault();
        setData(nonGovernmentalOrganizations);
        setPages([]);
        for (let i = 1; i <= Math.floor(nonGovernmentalOrganizations.length/3); i++) {
            setPages(prev => prev.push(i));
        };
    }

    const handleOnClickLocalCollection= (event) => {
        event.preventDefault();
        setData(localCollection);
        setPages([]);
        for (let i = 1; i <= Math.floor(localCollection.length/3); i++) {
                setPages(prev => prev.push(i));
        };
    }

    return (
        <Element name="whoWeHelpElement">
            <div className='container who-we-help'>
                <div className='help-section'>
                    <h2 className='help__title'>Komu pomagamy?</h2>
                    <div className='decoration decoration--who-we-help'> </div>
                    <div className='help__institutions'>
                        <button className='btn-institution' onClick={handleOnClickFoundations}>Fundacjom</button>
                        <button className='btn-institution' onClick={handleOnClickNonGovernmentalOrganizations}>
                            Organizacjom pozarządowym
                        </button>
                        <button className='btn-institution' onClick={handleOnClickLocalCollection}>
                            Lokalnym zbiórkom
                        </button>
                    </div>
                    <p className='help__institutions-info'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <InstitutionsDisplay data={localCollection}/>
                    <div className='help__pagination'>
                        { (pages.length > 1) &&
                            pages.forEach((page) => <button className='btn -btn-pagination'>page</button>) }
                    </div>

                </div>
            </div>
        </Element>
    )
}