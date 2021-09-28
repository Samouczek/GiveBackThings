import HomeContactUs from "../homePage/HomeContactUs";
import Footer from "../Footer";
import React from "react";
import ThingsHeader from "./ThingsHeader";
import ThingsImportantNotice from "./ThingsImportantNotice";
import ThingsFirstStep from "./ThingsFirstStep";

function Things() {
    return (
        <>
            <ThingsHeader />
            <ThingsImportantNotice />
            <ThingsFirstStep />
            <HomeContactUs />
            <Footer />
        </>
    )
}

export default Things;