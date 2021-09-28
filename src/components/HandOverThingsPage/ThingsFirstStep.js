
function ThingsFirstStep() {
    return (
        <div className='container first-step-section'>
            <div className='row'>
                <div className='first-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 1/4</div>
                    <form className='first-step-form'>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option1" />
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option1" />
                            ubrania, do wyrzucenia
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option1" />
                            zabawki
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option1" />
                            książki
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option1" />
                            Inne
                        </label>
                    </form>
                    <div className='step-change'>
                        <button className='btn btn-next'>Dalej</button>
                    </div>
                </div>
                <div  className='first-step-right col-lg-6 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsFirstStep;

