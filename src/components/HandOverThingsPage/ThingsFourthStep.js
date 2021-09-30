import React, {useEffect, useState} from "react";
import {
    cityValidation,
    dateValidation,
    phoneValidation,
    postCodeValidation,
    streetValidation, timeValidation
} from "../../logic/ThingsFormValidation";

function ThingsFourthStep({form,  onDoneStepFourth, onDoneStep}) {
    const [street, setStreet] = useState(form.street);
    const [city, setCity] = useState(form.city);
    const [postalCode, setPostalCode] = useState(form.postalCode);
    const [phone, setPhone] = useState(form.phone);
    const [date, setDate] = useState(form.date);
    const [time, setTime] = useState(form.time);
    const [note, setNote] = useState(form.note);

    useEffect(() => {
        if (typeof onDoneStepFourth === 'function' && !streetValidation(street) &&  !cityValidation(city)
            && !postCodeValidation(postalCode) && !phoneValidation(phone) && !dateValidation(date)
            && !timeValidation(time)){
           onDoneStepFourth(street,city,postalCode,phone,date,time,note);
        }
    },[city,street,postalCode,phone,date,time,note])

    const handleOnClickNext = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(5);
        }
    }
    const handleOnClickBack = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(3);
        }
    }

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
                                <input
                                    className='fourth-step-input'
                                    type="text"
                                    placeholder=' ul. Poznańska 1'
                                    onChange={ e => setStreet(e.target.value)}
                                />
                            </label>
                            <label className='fourth-step-label'>
                                Miasto
                                <input
                                    className='fourth-step-input'
                                    type="text"
                                    placeholder=' Kraków'
                                    onChange={ e => setCity(e.target.value)}
                                />
                            </label>
                            <label className='fourth-step-label'>
                                Kod <br />pocztowy
                                <input
                                    className='fourth-step-input'
                                    type="text"
                                    placeholder=' 00-000'
                                    onChange={ e =>  setPostalCode(e.target.value)}
                                />
                            </label>
                            <label className='fourth-step-label'>
                                Numer <br />telefonu
                                <input
                                    className='fourth-step-input'
                                    type="tel"
                                    placeholder=' 500 000 000'
                                    onChange={ e => setPhone(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='fourth-step-inputs'>
                            <h3 className='step-form-subtitle'>Termin odbioru:</h3>
                            <label className='fourth-step-label'>
                               Data
                                <input
                                    className='fourth-step-input'
                                    type="text"
                                    placeholder=' 2020/10/01'
                                    onChange={ e => setDate(e.target.value)}
                                />
                            </label>
                            <label className='fourth-step-label'>
                                Godzina
                                <input
                                    className='fourth-step-input'
                                    type="text"
                                    placeholder=' 13:30'
                                    onChange={ e => setTime(e.target.value)}
                                />
                            </label>
                            <label className='fourth-step-label'>
                                Uwagi <br />do kuriera
                                <input
                                    className='fourth-step-input comments-courier'
                                    type="textarea"
                                    placeholder=' uwagi'
                                    onChange={ e => setNote(e.target.value)}
                                />
                            </label>
                        </div>
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next' onClick={handleOnClickBack}>Wstecz</button>
                        <button className='btn-step btn-next'onClick={handleOnClickNext}>Dalej</button>
                    </div>
                </div>
                <div  className='fourth-step-right col-lg-3 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsFourthStep;
