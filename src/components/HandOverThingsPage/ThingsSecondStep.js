import React, {useEffect, useState} from 'react';

function ThingsSecondStep({numberBags,onDoneBags,onDoneStep}) {
    const [bags, setBags] = useState(numberBags);
    const [openCheckBox, setOpenCheckBox] = useState(false);
    const [failure,setFailure] = useState(false);

    useEffect(() => {
            if (typeof onDoneBags === 'function'){
                onDoneBags(bags);
            }
    })
    const handleOnClickNext = (e) => {
        e.preventDefault();
            if (typeof onDoneStep === 'function' && bags>0){
                onDoneStep(3);
            } else {
                setFailure(true);
            }
    }
    const handleOnClickBack = (e) => {
        e.preventDefault();
        if (typeof onDoneStep === 'function'){
            onDoneStep(1);
        }
    }
    const handleOnClickSelect = () => {
        setOpenCheckBox(prev => !prev);
    }
    const handleOnClickOption = (number) => {
        setBags(number);
        setOpenCheckBox(prev => !prev);
        setFailure(false);
    }

    return (
        <div className='container second-step-section'>
            <div className='row background-step'>
                <div className='second-step-left col-sm-12'>
                    <div className='number-step'>Krok 2/4</div>
                    <form className='second-step-form'>
                        <h2 className='step-form-title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                        <div className='second-step-label'>
                            <p className='second-step-label-title'>Liczba 60l worków:</p>
                            <div className="select-heading">
                                <div className="select-title" onClick={handleOnClickSelect}>
                                    <div className="select-title--title"> wybierz </div>
                                    {openCheckBox ?
                                        <div className="select-up-arrow"> </div> : <div className="select-down-arrow"> </div>
                                    }
                                </div>
                                {openCheckBox &&
                                    <ul className='select-options'>
                                        <li className="select-option" onClick={(number)=>handleOnClickOption(1)}>1</li>
                                        <li className="select-option" onClick={(number)=>handleOnClickOption(2)}>2</li>
                                        <li className="select-option" onClick={(number)=>handleOnClickOption(3)}>3</li>
                                        <li className="select-option" onClick={(number)=>handleOnClickOption(4)}>4</li>
                                        <li className="select-option" onClick={(number)=>handleOnClickOption(5)}>5</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        { failure && <p className='step-failure'>Wybierz liczbę worków</p>}
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next' onClick={handleOnClickBack}>Wstecz</button>
                        <button className='btn-step btn-next'onClick={handleOnClickNext}>Dalej</button>
                    </div>
                </div>
                <div  className='first-step-right col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsSecondStep;

