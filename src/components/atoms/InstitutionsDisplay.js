import {useState} from "react";

function InstitutionsDisplay({data}) {

    return (
                <div className='display-institutions'>
                    <div className='display-institutions__left'>
                        {data[0].length === 3 &&
                        <div className='institution'>
                            <p className='institution--name'> {data[0][0]} </p>
                            <p className='institution--purpose'> {data[0][1]} </p>
                        </div>
                        }
                        {data[1].length === 3 &&
                            <div className='institution'>
                                <p className='institution--name'>{data[1][0]}</p>
                                <p className='institution--purpose'>{data[1][1]}</p>
                            </div>
                        }
                        {data[2].length === 3 &&
                            <div className='institution'>
                                <p className='institution--name'>{data[2][0]}</p>
                                <p className='institution--purpose'>{data[2][1]}</p>
                            </div>
                        }
                    </div>
                    <div className='display-institutions__right'>
                        {data[0].length === 3 &&
                            <div className='institution--needs'>{data[0][2]}</div>
                        }
                        {data[1].length === 3 &&
                            <div className='institution--needs'>{data[1][2]}</div>
                        }
                        {data[2].length === 3 &&
                            <div className='institution--needs'>{data[2][2]}</div>
                        }
                    </div>
                </div>
    )
}

export default InstitutionsDisplay;
