import {useEffect, useState} from "react";

function ThingsFirstStep({thingsDonate, onDoneThings, onDoneStep}) {
   const [things, setThings] = useState(thingsDonate);
   const [firstChoice, setFirstChoice] = useState(false);
    const [secondChoice, setSecondChoice] = useState(false);
    const [thirdChoice, setThirdChoice] = useState(false);
    const [fourthChoice, setFourthChoice] = useState(false);
    const [fifthChoice, setFifthChoice] = useState(false);
    const [failure,setFailure] = useState(false);

    useEffect(() => {
       if (things !== false) {
           if (typeof onDoneThings === 'function'){
               onDoneThings(things);
           }
       }
   })

    const handleOnClick = (e) => {
       e.preventDefault();
       if (things !== false) {
           if (typeof onDoneStep === 'function'){
                onDoneStep(2);
           }
       } else {
               setFailure(true);
       }
    }

    const handleOnChange = (e,number) => {
        setThings(e.target.value);
        setFirstChoice(false);
        setSecondChoice(false);
        setThirdChoice(false);
        setFourthChoice(false);
        setFifthChoice(false);
        (number===1) && setFirstChoice(true);
        (number===2) && setSecondChoice(true);
        (number===3) && setThirdChoice(true);
        (number===4) && setFourthChoice(true);
        (number===5) && setFifthChoice(true);
        setFailure(false);
    }
    return (
        <div className='container first-step-section'>
            <div className='row background-step'>
                <div className='first-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 1/4</div>
                    <form className='first-step-form'>
                        <h2 className='step-form-title'>Zaznacz co chcesz oddać:</h2>
                        <label className='first-step-label'>
                            <div className='click-input'>
                                {firstChoice && <div className='click-checked'> </div>}
                            </div>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="ubrania, które nadają się do ponownego użycia"
                                name="things"
                                onChange={e => handleOnChange(e,1)}
                            />
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className='first-step-label'>
                            <div className='click-input'>
                                {secondChoice && <div className='click-checked'> </div>}
                            </div>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="ubrania, do wyrzucenia"
                                name="things"
                                onChange={e => handleOnChange(e,2)}
                            />
                            ubrania, do wyrzucenia
                        </label>
                        <label className='first-step-label'>
                            <div className='click-input'>
                                {thirdChoice && <div className='click-checked'> </div>}
                            </div>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="zabawki"
                                name="things"
                                onChange={e => handleOnChange(e,3)}
                            />
                            zabawki
                        </label>
                        <label className='first-step-label'>
                            <div className='click-input'>
                                {fourthChoice && <div className='click-checked'> </div>}
                            </div>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="książki"
                                name="things"
                                onChange={e => handleOnChange(e,4)}
                            />
                            książki
                        </label>
                        <label className='first-step-label'>
                            <div className='click-input'>
                                {fifthChoice && <div className='click-checked'> </div>}
                            </div>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="inne"
                                name="things"
                                onChange={e => handleOnChange(e,5)}
                            />
                            inne
                        </label>
                        { failure && <p className='step-failure'>Wybierz rzeczy, które chcesz oddać</p>}
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next' onClick={handleOnClick}>Dalej</button>
                    </div>
                </div>
                <div  className='first-step-right col-lg-6 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsFirstStep;

