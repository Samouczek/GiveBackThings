
export const emailValidation = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!re.test(email) || email.length === 0);
}

export const passwordValidation = (password) => {
    console.log(password.length);
    return (password.length < 6 || password===false);
}