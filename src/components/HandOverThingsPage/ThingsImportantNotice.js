
function ThingsImportantNotice({notice}){
    return (
        <div className='container important-section'>
            <div className='important-content'>
                <h2 className='important-title'>Ważne!</h2>
                <p  className='important-text'>{notice}</p>
            </div>
        </div>
    )
}

export default ThingsImportantNotice;

