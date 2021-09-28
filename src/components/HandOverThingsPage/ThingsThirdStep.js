import React from "react";

function ThingsThirdStep() {
    return (
        <div className='container third-step-section'>
            <div className='row background-step'>
                <div className='third-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 3/4</div>
                    <form className='third-step-form'>
                        <h2 className='step-form-title'>Lokalizacja:</h2>
                            <select className='second-step-select' >
                                <option value="1">Poznań</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Kraków</option>
                                <option value="4">Wrocław</option>
                                <option value="5">Katowice</option>
                            </select>
                        <h3 className='step-form-subtitle'>Komu chcesz pomóc?</h3>
                        <div className='first-step-checkboxes'>
                            <label className='first-step-label'>
                                <input className='third-step-input' type="checkbox" value="option2" name="things"/>
                                dzieciom
                            </label>
                            <label className='first-step-label'>
                                <input className='third-step-input' type="checkbox" value="option2" name="things"/>
                                samotnym matkom
                            </label>
                            <label className='first-step-label'>
                                <input className='third-step-input' type="checkbox" value="option2" name="things"/>
                                bezdomnym
                            </label>
                            <label className='first-step-label'>
                                <input className='third-step-input' type="checkbox" value="option2" name="things"/>
                                niepełnosprawnym
                            </label>
                            <label className='first-step-label'>
                                <input className='third-step-input' type="checkbox" value="option2" name="things"/>
                                osobom starszym
                            </label>
                        </div>
                       <h3 className='step-form-subtitle'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                        <input className='third-step-input-text' type="text" />
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next'>Wstecz</button>
                        <button className='btn-step btn-next'>Dalej</button>
                    </div>
                </div>
                <div  className='first-step-right col-lg-6 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsThirdStep;
