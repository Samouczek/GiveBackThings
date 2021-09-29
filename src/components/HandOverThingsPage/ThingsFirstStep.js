import {useEffect, useState} from "react";

function ThingsFirstStep({thingsDonate, onDoneThings, onDoneStep}) {
   const [things, setThings] = useState(thingsDonate);

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
       }
    }

    return (
        <div className='container first-step-section'>
            <div className='row background-step'>
                <div className='first-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 1/4</div>
                    <form className='first-step-form'>
                        <h2 className='step-form-title'>Zaznacz co chcesz oddać:</h2>
                        <label className='first-step-label'>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="ubrania, które nadają się do ponownego użycia"
                                name="things"
                                onChange={e =>  setThings(e.target.value)}
                            />
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className='first-step-label'>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="ubrania, do wyrzucenia"
                                name="things"
                                onChange={e =>  setThings(e.target.value)}
                            />
                            ubrania, do wyrzucenia
                        </label>
                        <label className='first-step-label'>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="zabawki"
                                name="things"
                                onChange={e =>  setThings(e.target.value)}
                            />
                            zabawki
                        </label>
                        <label className='first-step-label'>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="książki"
                                name="things"
                                onChange={e =>  setThings(e.target.value)}
                            />
                            książki
                        </label>
                        <label className='first-step-label'>
                            <input
                                className='first-step-input'
                                type="radio"
                                value="inne"
                                name="things"
                                onChange={e =>  setThings(e.target.value)}
                            />
                            inne
                        </label>
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

