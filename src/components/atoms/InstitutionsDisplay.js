import {useState} from "react";

function InstitutionsDisplay({data}) {
    const [displayData, setDisplayData] = useState(data);

    return (
       <div className='display-institutions'>
           <div className='display-institutions__left'>
                <div className='institution'>
                    <p className='institution--name'>{data[0][0]}</p>
                    <p className='institution--purpose'>{data[0][1]}</p>
                </div>
               {displayData[1].length = 3 &&
                   <div className='institution'>
                       <p className='institution--name'>{displayData[1][0]}</p>
                       <p className='institution--purpose'>{displayData[1][1]}</p>
                   </div>
               }
               {displayData[2].length = 3 &&
                   <div className='institution'>
                       <p className='institution--name'>{displayData[2][0]}</p>
                       <p className='institution--purpose'>{displayData[2][1]}</p>
                   </div>
               }
           </div>
           <div className='display-institutions__right'>
                <div className='institution--needs'>{displayData[0][2]}</div>
               {displayData[1].length = 3 &&
                   <div className='institution--needs'>{displayData[1][2]}</div>
               }
               {displayData[2].length = 3 &&
                   <div className='institution--needs'>{displayData[2][2]}</div>
               }
           </div>
       </div>
    )
}

export default InstitutionsDisplay;
