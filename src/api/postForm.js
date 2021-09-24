
export const postForm = (data, addData) => {
    fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.error === false && typeof addData === "function") {
                addData(data.data);
            }
        })
        .catch((err) => console.log(err));
}