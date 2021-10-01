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
import {STEP_1, STEP_2, STEP_3, STEP_4} from "../../constants/Notice";

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

function Things({email}) {
    const [step,setStep] = useState(1);

    const handleStepDone = (stepNumber) => {
        setStep(stepNumber);
    }
    const handleThingsDone = (data) => {
        dataForm.things = data;
    }
    const handleBagsDone = (data) => {
        dataForm.bags = data;
    }
    const handleLocalizationDone = (data) => {
        dataForm.localization = data;
    }
    const handleHelpGroupsDone = (data) => {
        dataForm.helpGroups = data;
    }
    const handleLocalizationSpecificDone = (data) => {
        dataForm.localizationSpecific = data;
    }
    const handleFourthStepDone = (street,city,postCode,phone,date,time,note) => {
        dataForm.street = street;
        dataForm.city = city;
        dataForm.postCode = postCode;
        dataForm.phone = phone;
        dataForm.date = date;
        dataForm.time=time;
        dataForm.note = note;
        console.log(dataForm);
    }
    console.log(dataForm);
    return (
        <>
            <ThingsHeader userEmail={email}/>
            {step === 1 && <ThingsImportantNotice notice={STEP_1} />}
            {step === 2 && <ThingsImportantNotice notice={STEP_2} />}
            {step === 3 && <ThingsImportantNotice notice={STEP_3} />}
            {step === 4 && <ThingsImportantNotice notice={STEP_4} />}
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
                <ThingsSecondStep
                    numberBags={dataForm.bags}
                    onDoneBags={handleBagsDone}
                    onDoneStep={handleStepDone} />
            }
            {
                step === 3 &&
                <ThingsThirdStep
                    form={dataForm}
                    onDoneLocalization={handleLocalizationDone}
                    onDoneHelpGroups={handleHelpGroupsDone}
                    onDoneLocalizationSpecific={handleLocalizationSpecificDone}
                    onDoneStep={handleStepDone} />
            }
            {
                step === 4 &&
                <ThingsFourthStep
                    form={dataForm}
                    onDoneStepFourth={handleFourthStepDone}
                    onDoneStep={handleStepDone} />
            }
            {
                step === 5 &&
                <ThingsSummary thingsForm={dataForm} onDoneStep={handleStepDone} />
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