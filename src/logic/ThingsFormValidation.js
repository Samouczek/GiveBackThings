
export const streetValidation = (street) => {
    return street.length < 2;
}

export const cityValidation = (city) => {
    return city.length < 2;
}

export const postCodeValidation = (postCode) => {
    const pl = /\d{2}=\d{3}/;
    return !pl.test(postCode);
}

export const phoneCodeValidation = (phone) => {
    const number = /\(?([0-9]{3})\)?([ ]?)([0-9]{3})\2([0-9]{3})/;
    return !number.test(phone);
}


export const dateValidation = (date) => {
    const rex = /^20(((([248][048])|([13579][26]))\/(((0[13578]|1[02])\/([0-2][0-9]|3[01]))|((0[469]|11)\/([0-2][0-9]|30))|(02\/([0-2][0-9]))))|((([248][1-35-79])|([13579][013-57-9]))\/(((0[13578]|1[02])\/([0-2][0-9]|3[01]))|((0[469]|11)\/([0-2][0-9]|30))|(02\/(((0|1)[0-9])|(2[0-8]))))))$/;
    return !rex.test(date);
}

export const timeValidation = (time) => {
    const rex = /^(([0-1]{0,1}[0-9])|(2[0-3])):[0-5]{0,1}[0-9]$/;
    return !rex.test(time);
}
