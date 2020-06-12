export const isEmpty = val => val.trim().length === 0;

export const isEmailValid = val => new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(val);