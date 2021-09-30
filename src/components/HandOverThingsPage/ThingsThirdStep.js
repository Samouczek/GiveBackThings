import React, {useEffect, useState} from "react";

function ThingsThirdStep({form,onDoneHelpGroups,onDoneLocalization,onDoneLocalizationSpecific,onDoneStep}) {
    const [localization, setLocalization] = useState(form.localization);
    const [localizationSpecific, setLocalizationSpecific] = useState(form.localizationSpecific);
    const [firstCheckbox, setFirstCheckbox] = useState(false);
    const [secondCheckbox, setSecondCheckbox] = useState(false);
    const [thirdCheckbox, setThirdCheckbox] = useState(false);
    const [fourthCheckbox, setFourthCheckbox] = useState(false);
    const [fifthCheckbox, setFifthCheckbox] = useState(false);
    const [openCheckBox, setOpenCheckBox] = useState(false);
    const helpGroups = [];


    useEffect(() => {
        if (typeof onDoneLocalization=== 'function'){
            onDoneLocalization(localization);
        }
    },[localization])

    useEffect(() => {
        if (typeof onDoneLocalizationSpecific=== 'function'){
            onDoneLocalizationSpecific(localizationSpecific);
        }
    },[localizationSpecific])

    const handleOnClickNext = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(4);
        }
        firstCheckbox && helpGroups.push("dzieciom");
        secondCheckbox && helpGroups.push("samotnym matkom");
        thirdCheckbox && helpGroups.push("bezdomnym");
        fourthCheckbox && helpGroups.push("niepełnosprawnym");
        fifthCheckbox && helpGroups.push("osobom starszym");
        if (typeof onDoneHelpGroups === 'function'){
            console.log(helpGroups);
            onDoneHelpGroups(helpGroups);
        }
    }
    const handleOnClickSelect = () => {
        setOpenCheckBox(prev => !prev);
    }
    const handleOnClickOption = (city) => {
        setLocalization(city);
        setOpenCheckBox(prev => !prev);
    }

    const handleOnClickBack = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(2);
        }
    }

    return (
        <div className='container third-step-section'>
            <div className='row background-step'>
                <div className='third-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 3/4</div>
                    <form className='third-step-form'>
                        <h2 className='step-form-title'>Lokalizacja:</h2>
                        <div className="select-heading">
                            <div className="select-title" onClick={handleOnClickSelect}>
                                <div className="select-title--title"> wybierz </div>
                                {openCheckBox ?
                                    <div className="select-up-arrow"> </div> : <div className="select-down-arrow"> </div>
                                }
                            </div>
                        </div>
                        <h3 className='step-form-subtitle'>Komu chcesz pomóc?</h3>
                        <div className='third-step-checkboxes'>
                            <label className = {`third-step-label ${firstCheckbox ? "active-checked" : ""}`}>
                                <input
                                    className='third-step-input'
                                    type="checkbox"
                                    value="dzieciom"
                                    onChange={() => {setFirstCheckbox(prev => !prev)}}
                                />
                                dzieciom
                            </label>
                            <label className = {`third-step-label ${secondCheckbox ? "active-checked" : ""}`}>
                                <input
                                    className='third-step-input'
                                    type="checkbox"
                                    value="samotnym matkom"
                                    onChange={() => {setSecondCheckbox(prev => !prev)}}
                                />
                                samotnym matkom
                            </label>
                            <label className = {`third-step-label ${thirdCheckbox ? "active-checked" : ""}`}>
                                <input
                                    className='third-step-input'
                                    type="checkbox"
                                    value="bezdomnym"
                                    onChange={() => {setThirdCheckbox(prev => !prev)}}
                                />
                                bezdomnym
                            </label>
                            <label className = {`third-step-label ${fourthCheckbox ? "active-checked" : ""}`}>
                                <input
                                    className='third-step-input'
                                    type="checkbox"
                                    value="niepełnosprawnym"
                                    onChange={() => {setFourthCheckbox(prev => !prev)}}
                                />
                                niepełnosprawnym
                            </label>
                            <label className = {`third-step-label ${fifthCheckbox ? "active-checked" : ""}`}>
                                <input
                                    className='third-step-input'
                                    type="checkbox"
                                    value="osobom starszym"
                                    onChange={() => {setFifthCheckbox(prev => !prev)}}
                                />
                                osobom starszym
                            </label>
                        </div>
                       <h3 className='step-form-subtitle'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                        <input
                            className='third-step-input-text'
                            type="text"
                            onChange={ e => setLocalizationSpecific(e.target.value)}
                        />
                        {openCheckBox &&
                        <ul className='select-options'>
                            <li
                                className="select-option"
                                onClick={(city)=>handleOnClickOption("Poznań")}
                            >
                                Poznań
                            </li>
                            <li
                                className="select-option"
                                onClick={(city)=>handleOnClickOption("Warszawa")}
                            >
                                Warszawa
                            </li>
                            <li
                                className="select-option"
                                onClick={(city)=>handleOnClickOption("Kraków")}
                            >
                                Kraków
                            </li>
                            <li
                                className="select-option"
                                onClick={(city)=>handleOnClickOption("Wrocław")}
                            >
                                Wrocław
                            </li>
                            <li
                                className="select-option"
                                onClick={(city)=>handleOnClickOption("Katowice")}
                            >
                                Katowice
                            </li>
                        </ul>
                        }
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next' onClick={handleOnClickBack}>Wstecz</button>
                        <button className='btn-step btn-next'onClick={handleOnClickNext}>Dalej</button>
                    </div>
                </div>
                <div  className='first-step-right col-lg-6 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsThirdStep;
