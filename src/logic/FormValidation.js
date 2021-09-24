
export const nameValidation = (name) => {
    if (name.includes(" ") || name.length === 0){
        return "Podane imię jest nieprawidłowe";
    }
    return 0;
}

export const emailValidation = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email) || email.length === 0) {
        return "Podany email jest nieprawidłowy"
    }
   return 0;
}

export const messageValidation = (message) => {
    if (message.length < 120) {
        return "Wiadomość musi mieć conajmniej 120 znaków";
    }
    return 0;
}