import * as Scroll from "react-scroll";
import {foundations, nonGovernmentalOrganizations,localCollection} from "../../constants/Institution";
import {useState} from "react";
import InstitutionsDisplay from "../atoms/InstitutionsDisplay";
import SetArrayPages from "../../logic/SetArrayPages";
import SetThreeDataDisplay from "../../logic/SetThreeDataDisplay";

export default function HomeWhoWeHelp() {
    const [data, setData] = useState(foundations);
    const [dataDisplay, setDataDisplay] = useState([]);
    const [pages, setPages] = useState([1]);

    let Element = Scroll.Element;

    const handleOnClickFoundations = (event) => {
        event.preventDefault();
        setData(foundations);
        setPages(SetArrayPages(Math.floor(foundations.length/3)));
    }

    const handleOnClickNonGovernmentalOrganizations = (event) => {
        event.preventDefault();
        setData(nonGovernmentalOrganizations);
        setPages(SetArrayPages(Math.floor(nonGovernmentalOrganizations.length/3)));
    }

    const handleOnClickLocalCollection= (event) => {
        event.preventDefault();
        setData(localCollection);
        setPages(SetArrayPages(Math.floor(localCollection.length/3)));
    }

    const handleOnClickPage = (event, page) => {
        event.preventDefault();
        setDataDisplay(SetThreeDataDisplay(data,page));
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
                        { pages.length > 1 &&
                            pages.map((page,index) =>
                                <button
                                    className='btn btn-pagination'
                                    key={index}
                                    onClick={(e) => handleOnClickPage(e,page)}
                                >
                                    {page}
                                </button>)
                        }
                    </div>

                </div>
            </div>
        </Element>
    )
}