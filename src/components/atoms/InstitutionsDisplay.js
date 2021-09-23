
function InstitutionsDisplay({data}) {

    return (
                <div className='display-institutions'>
                        {data[0].length === 3 &&
                            <div className='institution'>
                                <div className='institution-data'>
                                    <p className='institution--name'> {data[0][0]} </p>
                                    <p className='institution--purpose'> {data[0][1]} </p>
                                </div>
                                <div className='institution--needs'>
                                    <p className='institution--needs--paragraph'>{data[0][2]}</p>
                                </div>
                            </div>
                        }
                        {data[1].length === 3 &&
                        <div className='institution'>
                            <div className='institution-data'>
                                <p className='institution--name'>{data[1][0]}</p>
                                <p className='institution--purpose'>{data[1][1]}</p>
                            </div>
                            <div className='institution--needs'>
                                <p className='institution--needs--paragraph'>{data[1][2]}</p>
                            </div>
                        </div>
                        }
                        {data[2].length === 3 &&
                        <div className='institution'>
                            <div className='institution-data'>
                                <p className='institution--name'>{data[2][0]}</p>
                                <p className='institution--purpose'>{data[2][1]}</p>
                            </div>
                            <div className='institution--needs'>
                                <p className='institution--needs--paragraph'>{data[2][2]}</p>
                            </div>
                        </div>
                        }
                </div>
    )
}

export default InstitutionsDisplay;
