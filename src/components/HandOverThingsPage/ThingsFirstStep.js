
function ThingsFirstStep() {
    return (
        <div className='container first-step-section'>
            <div className='row background-step'>
                <div className='first-step-left col-lg-6 col-sm-12'>
                    <div className='number-step'>Krok 1/4</div>
                    <form className='first-step-form'>
                        <h2 className='step-form-title'>Zaznacz co chcesz oddać:</h2>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option1" name="things"/>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option2" name="things"/>
                            ubrania, do wyrzucenia
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option3" name="things"/>
                            zabawki
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option4" name="things"/>
                            książki
                        </label>
                        <label className='first-step-label'>
                            <input className='first-step-input' type="radio" value="option5" name="things"/>
                            Inne
                        </label>
                    </form>
                    <div className='step-change'>
                        <button className='btn-step btn-next'>Dalej</button>
                    </div>
                </div>
                <div  className='first-step-right col-lg-6 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsFirstStep;

