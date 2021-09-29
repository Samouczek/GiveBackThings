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
                    <h3 className='step-form-subtitle'>Oddajesz:</h3>
                    <div className='give-back give-back-first'>
                        <p>{`${thingsForm.bags} worki, ${thingsForm.things}, ${thingsForm.helpGroups.map((group) => group)} `}
                        </p>
                    </div>
                    <div className='give-back give-back-second'>
                        <p>{`dla lokalizacji: ${thingsForm.localization ? thingsForm.localization : thingsForm.localizationSpecific} `}
                        </p>
                    </div>
                    <form className='fourth-step-form'>
                        <div className='fourth-step-inputs'>
                            <h3 className='step-form-subtitle'>Adres odbioru:</h3>
                            <label className='fourth-step-label'>
                                Ulica
                                <div className='fourth-step-input'> {thingsForm.street} </div>
                            </label>
                            <label className='fourth-step-label'>
                                Miasto
                                <div className='fourth-step-input'> {thingsForm.city} </div>
                            </label>
                            <label className='fourth-step-label'>
                                Kod <br />pocztowy
                                <div className='fourth-step-input'> {thingsForm.postCode} </div>
                            </label>
                            <label className='fourth-step-label'>
                                Numer <br />telefonu
                                <div className='fourth-step-input'> {thingsForm.phone} </div>
                            </label>
                        </div>
                        <div className='fourth-step-inputs'>
                            <h3 className='step-form-subtitle'>Termin odbioru:</h3>
                            <label className='fourth-step-label'>
                                Data
                                <div className='fourth-step-input'> {thingsForm.date} </div>
                            </label>
                            <label className='fourth-step-label'>
                                Godzina
                                <div className='fourth-step-input'> {thingsForm.time} </div>
                            </label>
                            <label className='fourth-step-label'>
                                Uwagi <br />do kuriera
                                <div className='fourth-step-input'> {thingsForm.note} </div>
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