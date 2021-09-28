import React from 'react';

function ThingsSecondStep() {
    return (
        <div className='container second-step-section'>
            <div className='row second-step'>
                <div className='second-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 2/4</div>
                    <form className='second-step-form'>
                        <h2 className='step-form-title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                        <label className='second-step-label'>
                            Liczba 60l worków:
                            <select value='-wybierz-'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
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

export default ThingsSecondStep;

