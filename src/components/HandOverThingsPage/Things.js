import HomeContactUs from "../homePage/HomeContactUs";
import Footer from "../Footer";
import React from "react";
import ThingsHeader from "./ThingsHeader";
import ThingsImportantNotice from "./ThingsImportantNotice";
import ThingsFirstStep from "./ThingsFirstStep";
import ThingsSecondStep from "./ThingsSecondStep";
import ThingsThirdStep from "./ThingsThirdStep";
import ThingsFourthStep from "./ThingsFourthStep";
import ThingsThanks from "./ThingsThanks";

function Things() {
    return (
        <>
            <ThingsHeader />
            <ThingsImportantNotice />
            <ThingsFirstStep />
            <ThingsSecondStep />
            <ThingsThirdStep />
            <ThingsFourthStep />
            <ThingsThanks />
            <HomeContactUs />
            <Footer />
        </>
    )
}

export default Things;