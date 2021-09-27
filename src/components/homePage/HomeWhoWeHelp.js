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
    const [activePage, setActivePage] = useState(false);
    const [activeInstitute, setActiveInstitute] = useState("fundations");

    let Element = Scroll.Element;

    const handleOnClickFoundations = (event) => {
        event.preventDefault();
        setData(foundations);
        setPages(SetArrayPages(Math.floor(foundations.length/3)));
        setDataDisplay([foundations[0],foundations[1],foundations[2]]);
        setActiveInstitute("foundations");
    }

    const handleOnClickNonGovernmentalOrganizations = (event) => {
        event.preventDefault();
        setData(nonGovernmentalOrganizations);
        setPages(SetArrayPages(Math.floor(nonGovernmentalOrganizations.length/3)));
        setDataDisplay([
            nonGovernmentalOrganizations[0],
            nonGovernmentalOrganizations[1],
            nonGovernmentalOrganizations[2]]);
        setActiveInstitute("organizations");
    }

    const handleOnClickLocalCollection= (event) => {
        event.preventDefault();
        setData(localCollection);
        setPages(SetArrayPages(Math.floor(localCollection.length/3)));
        setDataDisplay([localCollection[0],localCollection[1],localCollection[2]]);
        setActiveInstitute("collections");
    }

    const handleOnClickPage = (event, page) => {
        event.preventDefault();
        setDataDisplay(SetThreeDataDisplay(data,page));
        
    }

    let classNameFoundations = 'btn-institution active';
    let classNameOrganizations = 'btn-institution';
    let classNameCollections = 'btn-institution';

        if (activeInstitute === "foundations") {
            classNameFoundations += ' active';
            classNameOrganizations = 'btn-institution';
            classNameCollections = 'btn-institution';
        }
        if (activeInstitute === "organizations") {
            classNameOrganizations += ' active';
            classNameFoundations = 'btn-institution';
            classNameCollections = 'btn-institution';

        }
        if (activeInstitute === "collections") {
            classNameCollections += ' active';
            classNameFoundations = 'btn-institution';
            classNameOrganizations = 'btn-institution';
        }

    return (
        <Element name="whoWeHelpElement">
            <div className='container who-we-help'>
                <div className='help-section'>
                    <h2 className='help__title'>Komu pomagamy?</h2>
                    <div className='decoration decoration--who-we-help'> </div>
                    <div className='help__institutions'>
                        <button className = {classNameFoundations} onClick={handleOnClickFoundations}>
                            Fundacjom
                        </button>
                        <button  className = {classNameOrganizations} onClick={handleOnClickNonGovernmentalOrganizations}>
                            Organizacjom pozarządowym
                        </button>
                        <button  className = {classNameCollections} onClick={handleOnClickLocalCollection}>
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