import HomeContactUs from "../homePage/HomeContactUs";
import Footer from "../Footer";
import React from "react";
import ThingsHeader from "./ThingsHeader";
import ThingsImportantNotice from "./ThingsImportantNotice";
import ThingsFirstStep from "./ThingsFirstStep";

function ThingsThanks() {
    return (
        <div className='container thanks-section'>
            <div className='row background-step'>
                <div className='thanks-left col-lg-8 col-sm-12'>
                    <h2 className='thanks-title'>
                        Dziękujemy za przesłanie formularza <br />
                        Na maila prześlemy wszelkie <br />
                        informacje o odbiorze.
                    </h2>
                    <div className='decoration decoration--header'> </div>
                </div>
                <div  className='thanks-right col-lg-3 col-sm-12'>
                </div>
            </div>
        </div>
    )
}

export default ThingsThanks;