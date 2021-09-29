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
        <div className='container summary-section'>
            <div className='row background-step'>
                <div className='summary-left col-lg-8 col-sm-12'>
                    <h2 className='step-form-title'>Podsumowanie Twojej darowizny</h2>
                    <h3 className='step-form-subtitle'>Oddajesz:</h3>
                    <div className='give-back '>
                        <div className='give-back__first'> </div>
                        <p>{`${thingsForm.bags} worki, ${thingsForm.things}, ${thingsForm.helpGroups.map((group) => group)} `}
                        </p>
                    </div>
                    <div className='give-back'>
                        <div className='give-back__second'> </div>
                        <p>{`dla lokalizacji: ${thingsForm.localization ? thingsForm.localization : thingsForm.localizationSpecific} `}
                        </p>
                    </div>
                    <form className='summary-form'>
                        <div className='summary-inputs'>
                            <h3 className='step-form-subtitle'>Adres odbioru:</h3>
                            <label className='summary-label'>
                                Ulica
                                <div className='summary-input'> {thingsForm.street} </div>
                            </label>
                            <label className='summary-label'>
                                Miasto
                                <div className='summary-input'> {thingsForm.city} </div>
                            </label>
                            <label className='summary-label'>
                                Kod <br />pocztowy
                                <div className='summary-input'> {thingsForm.postCode} </div>
                            </label>
                            <label className='summary-label'>
                                Numer <br />telefonu
                                <div className='summary-input'> {thingsForm.phone} </div>
                            </label>
                        </div>
                        <div className='summary-inputs'>
                            <h3 className='step-form-subtitle'>Termin odbioru:</h3>
                            <label className='summary-label'>
                                Data
                                <div className='summary-input'> {thingsForm.date} </div>
                            </label>
                            <label className='summary-label'>
                                Godzina
                                <div className='summary-input'> {thingsForm.time} </div>
                            </label>
                            <label className='summary-label'>
                                Uwagi <br />do kuriera
                                <div className='summary-input'> {thingsForm.note} </div>
                            </label>
                        </div>
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next' onClick={handleOnClickBack}>Wstecz</button>
                        <button className='btn-step btn-next' onClick={handleOnClickNext}>Potwierdzam</button>
                    </div>
                </div>
                <div  className='summary-right col-lg-3 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsSummary;