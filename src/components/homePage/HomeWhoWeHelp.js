import * as Scroll from "react-scroll";
import {foundations, nonGovernmentalOrganizations,localCollection} from "../../constants/Institution";
import {useEffect, useState} from "react";
import InstitutionsDisplay from "../atoms/InstitutionsDisplay";
import SetArrayPages from "../../logic/SetArrayPages";
import SetThreeDataDisplay from "../../logic/SetThreeDataDisplay";

export default function HomeWhoWeHelp() {
    const [data, setData] = useState(foundations);
    const [dataDisplay, setDataDisplay] = useState([foundations[0],foundations[1],foundations[2]]);
    const [pages, setPages] = useState([1,2,3]);
    const [activePage, setActivePage] = useState(1);
    const [activeFoundations, setActiveFoundations] = useState(true);
    const [activeOrganizations, setActiveOrganizations] = useState(false);
    const [activeCollections, setActiveCollections] = useState(false);

    let Element = Scroll.Element;

    const handleOnClickFoundations = (event) => {
        event.preventDefault();
        setData(foundations);
        setPages(SetArrayPages(Math.floor(foundations.length/3)));
        setDataDisplay([foundations[0],foundations[1],foundations[2]]);
        setActiveFoundations(true);
        setActiveOrganizations(false);
        setActiveCollections(false);
    }

    const handleOnClickNonGovernmentalOrganizations = (event) => {
        event.preventDefault();
        setData(nonGovernmentalOrganizations);
        setPages(SetArrayPages(Math.floor(nonGovernmentalOrganizations.length/3)));
        setDataDisplay([
            nonGovernmentalOrganizations[0],
            nonGovernmentalOrganizations[1],
            nonGovernmentalOrganizations[2]]);
        setActiveFoundations(false);
        setActiveOrganizations(true);
        setActiveCollections(false)
    }

    const handleOnClickLocalCollection= (event) => {
        event.preventDefault();
        setData(localCollection);
        setPages(SetArrayPages(Math.floor(localCollection.length/3)));
        setDataDisplay([localCollection[0],localCollection[1],localCollection[2]]);
        setActiveFoundations(false);
        setActiveOrganizations(false)
        setActiveCollections(true);
    }

    const handleOnClickPage = (event, page) => {
        event.preventDefault();
        setDataDisplay(SetThreeDataDisplay(data,page));
        setActivePage(page);
    }

    return (
        <Element name="whoWeHelpElement">
            <div className='container who-we-help'>
                <div className='help-section'>
                    <h2 className='help__title'>Komu pomagamy?</h2>
                    <div className='decoration decoration--who-we-help'> </div>
                    <div className='help__institutions'>
                        <button
                            className = {`btn-institution ${activeFoundations ? "active" : ""}`}
                            onClick={handleOnClickFoundations}
                        >
                            Fundacjom
                        </button>
                        <button  
                            className = {`btn-institution ${activeOrganizations ? "active" : ""}`}
                            onClick={handleOnClickNonGovernmentalOrganizations}
                        >
                            Organizacjom pozarządowym
                        </button>
                        <button  
                       className = {`btn-institution ${activeCollections ? "active" : ""}`}
                        onClick={handleOnClickLocalCollection}>
                            Lokalnym zbiórkom
                        </button>
                    </div>
                    <p className='help__institutions-info'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <InstitutionsDisplay data={dataDisplay}/>
                    <div className='help__pagination'>
                        { pages.length > 1 &&
                            pages.map((page,index) =>
                                <button
                                    className = {`btn btn-pagination ${(activePage === page) ? 'active' : ''}`}
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