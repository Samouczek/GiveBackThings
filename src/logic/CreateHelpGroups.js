
function CreateHelpGroups(firstCheckbox, secondCheckbox,thirdCheckbox, fourthCheckbox,fifthCheckbox){
    const helpGroups = [];
    firstCheckbox && helpGroups.push("dzieciom");
    secondCheckbox && helpGroups.push("samotnym matkom");
    thirdCheckbox && helpGroups.push("bezdomnym");
    fourthCheckbox && helpGroups.push("niepełnosprawnym");
    fifthCheckbox && helpGroups.push("osobom starszym");
    return helpGroups;
}

export default CreateHelpGroups;