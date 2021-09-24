
export const postForm = (data) => {
    fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(resp => console.log(resp.text()))
        .catch((err) => console.log(err));
}