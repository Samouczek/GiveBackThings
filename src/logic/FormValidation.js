
export const nameValidation = (name) => {
    return (name.includes(" ") || name.length === 0);
}

export const emailValidation = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!re.test(email) || email.length === 0);
}

export const messageValidation = (message) => {
    return (message.length < 120);
}