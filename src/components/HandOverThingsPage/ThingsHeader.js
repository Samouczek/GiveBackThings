import Navigation from "../Navigation";

function ThingsHeader() {
    return (
        <div className='container '>
            <div className='row things_header'>
                <div className='col-lg-6 image-things-header'>
                </div>
                <div className='col-lg-6 col-sm-12 right-header'>
                    <Navigation />
                        <h1>
                            Oddaj rzeczy, których już nie chcesz <br />
                            POTRZEBUJĄCYM
                        </h1>
                        <div className='decoration decoration--header'> </div>
                        <h2 className='things_subtitle'>Wystarczą 4 proste kroki:</h2>
                        <div className='things_steps row'>
                            <div className='things_step col-sm-6'>
                                <p className='things_step_number'>1</p>
                                <p className='things_step_title'>Wybierz <br/> rzeczy</p>
                            </div>
                            <div className='things_step  col-sm-6'>
                                <p className='things_step_number'>2</p>
                                <p className='things_step_title'>Spakuj je <br/> w worki</p>
                            </div>
                            <div className='things_step  col-sm-6'>
                                <p className='things_step_number'>3</p>
                                <p className='things_step_title'>Wybierz <br/> fundację</p>
                            </div>
                            <div className='things_step  col-sm-6'>
                                <p className='things_step_number'>4</p>
                                <p className='things_step_title'>Zamów <br/> kuriera</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ThingsHeader;