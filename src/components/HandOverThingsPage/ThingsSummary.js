import HomeContactUs from "../homePage/HomeContactUs";
import Footer from "../Footer";
import React from "react";
import ThingsHeader from "./ThingsHeader";
import ThingsImportantNotice from "./ThingsImportantNotice";
import ThingsFirstStep from "./ThingsFirstStep";

function ThingsSummary({thingsForm, onDoneStep}) {

    const handleOnClickNext = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(6);
        }
    }

    const handleOnClickBack = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(4);
        }
    }

    return (
        <div className='container fourth-step-section'>
            <div className='row background-step'>
                <div className='fourth-step-left col-lg-8 col-sm-12'>
                    <h2 className='step-form-title'>Podsumowanie Twojej darowizny</h2>
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
                        <button className='btn-step btn-next' onClick={handleOnClickBack}>Wstecz</button>
                        <button className='btn-step btn-next' onClick={handleOnClickNext}>Potwierdzam</button>
                    </div>
                </div>
                <div  className='fourth-step-right col-lg-3 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsSummary;