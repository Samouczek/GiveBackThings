import React from "react";

function ThingsFourthStep() {
    return (
        <div className='container fourth-step-section'>
            <div className='row background-step'>
                <div className='fourth-step-left col-lg-8 col-sm-12'>
                    <div className='number-step'>Krok 4/4</div>
                    <h2 className='step-form-title'>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                    <form className='fourth-step-form'>
                        <div className='fourth-step-inputs'>
                            <h3 className='step-form-subtitle'>Adres odbioru:</h3>
                            <label className='fourth-step-label'>
                                Ulica
                                <input className='fourth-step-input' type="text"/>
                            </label>
                            <label className='fourth-step-label'>
                                Miasto
                                <input className='fourth-step-input' type="text" />
                            </label>
                            <label className='fourth-step-label'>
                                Kod <br />pocztowy
                                <input className='fourth-step-input' type="text" />
                            </label>
                            <label className='fourth-step-label'>
                                Numer <br />telefonu
                                <input className='fourth-step-input' type="tel" />
                            </label>
                        </div>
                        <div className='fourth-step-inputs'>
                            <h3 className='step-form-subtitle'>Termin odbioru:</h3>
                            <label className='fourth-step-label'>
                               Data
                                <input className='fourth-step-input' type="date"/>
                            </label>
                            <label className='fourth-step-label'>
                                Godzina
                                <input className='fourth-step-input' type="time" />
                            </label>
                            <label className='fourth-step-label'>
                                Uwagi <br />do kuriera
                                <input className='fourth-step-input comments-courier' type="textarea" />
                            </label>
                        </div>
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next'>Wstecz</button>
                        <button className='btn-step btn-next'>Dalej</button>
                    </div>
                </div>
                <div  className='fourth-step-right col-lg-3 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsFourthStep;
