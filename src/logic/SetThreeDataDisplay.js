
function SetThreeDataDisplay(data, page) {
    const displayData = [];
    for (let i = 0; i < 3; i++) {
        if (data[i + 3 * (page-1)].length === 3) {
            displayData.push(data[i + 3 * (page-1)]);
        } else {
            displayData.push(["","",""]);
        }
    }
    return displayData;
}

export default SetThreeDataDisplay;