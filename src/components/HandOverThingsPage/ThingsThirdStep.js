import React, {useEffect, useState} from "react";

function ThingsThirdStep({form,onDoneHelpGroups,onDoneLocalization,onDoneLocalizationSpecific,onDoneStep}) {
    const [localization, setLocalization] = useState(form.localization);
    const [localizationSpecific, setLocalizationSpecific] = useState(form.localizationSpecific);
    const [firstCheckbox, setFirstCheckbox] = useState(false);
    const [secondCheckbox, setSecondCheckbox] = useState(false);
    const [thirdCheckbox, setThirdCheckbox] = useState(false);
    const [fourthCheckbox, setFourthCheckbox] = useState(false);
    const [fifthCheckbox, setFifthCheckbox] = useState(false);
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
                            <select
                                className='second-step-select'
                                value={localization}
                                onChange={e => setLocalization(e.target.value)}
                            >
                                <option value="Poznań">Poznań</option>
                                <option value="Warszawa">Warszawa</option>
                                <option value="Kraków">Kraków</option>
                                <option value="Wrocław">Wrocław</option>
                                <option value="Katowice">Katowice</option>
                            </select>
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
