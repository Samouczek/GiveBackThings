
function SetThreeDataDisplay(data, page) {
    const displayData = [];
    for (let i = 1; i < 4; i++) {
        displayData.push(data[i + 3 * (page-1)]);
    }
    return displayData;
}

export default SetThreeDataDisplay;