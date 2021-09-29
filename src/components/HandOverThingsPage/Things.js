import HomeContactUs from "../homePage/HomeContactUs";
import Footer from "../Footer";
import React, {useState} from "react";
import ThingsHeader from "./ThingsHeader";
import ThingsImportantNotice from "./ThingsImportantNotice";
import ThingsFirstStep from "./ThingsFirstStep";
import ThingsSecondStep from "./ThingsSecondStep";
import ThingsThirdStep from "./ThingsThirdStep";
import ThingsFourthStep from "./ThingsFourthStep";
import ThingsThanks from "./ThingsThanks";
import ThingsSummary from "./ThingsSummary";

function Things() {
    const [step,setStep] = useState(1);

    const dataForm = {
        things: false,
        bags: 0,
        localization: false,
        helpGroups: [],
        localizationSpecific: false,
        street: false,
        city: false,
        postCode: false,
        phone: false,
        date: false,
        time: false,
        note: false
    }

    const handleStepDone = (stepNumber) => {
        setStep(stepNumber);
    }

    const handleThingsDone = (data) => {
        dataForm.things = data;
    }

    return (
        <>
            <ThingsHeader />
            <ThingsImportantNotice />
            {
                step === 1 &&
                <ThingsFirstStep
                    thingsDonate={dataForm.things}
                    onDoneThings={handleThingsDone}
                    onDoneStep={handleStepDone}
                />
            }
            {
                step === 2 &&
                <ThingsSecondStep/>
            }
            {
                step === 3 &&
                <ThingsThirdStep/>
            }
            {
                step === 4 &&
                <ThingsFourthStep/>
            }
            {
                step === 5 &&
                <ThingsSummary thingsForm={dataForm} />
            }
            {
                step === 6 &&
                <ThingsThanks/>
            }
            <HomeContactUs />
            <Footer />
        </>
    )
}

export default Things;