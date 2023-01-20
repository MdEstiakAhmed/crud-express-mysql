const emailValidator = require('email-validator');
const passwordValidator = require("password-validator");

const isEmailValid = (email) => {
    let res = emailValidator.validate(email);
    if(res) {
        return {status: true};
    }
    return {status: false, errors: ["Invalid email"]}
}

const isPasswordValid = (password) => {
    var schema = new passwordValidator();
    schema
        .is().min(6, "minimum 6 characters")
        .is().max(30, "maximum 30 characters")
        .has().uppercase(1, "minimum one uppercase")
        .has().lowercase(1, "minimum one lowercase")
        .has().digits(1, "minimum one digit")

    let res = schema.validate(password, { details: true });
    if(res.length === 0) {
        return {status: true};
    }
    else {
        return {status: false, errors: res.map(error => error.message)}
    }
}

const isConfirmPasswordValid = (password, confirmPassword) => {
    if(password === confirmPassword) {
        return {status: true};
    }
    return {status: false, errors: ["Password and confirm password must be same"]}
}

const isUsernameValid = (username) => {
    let regex = /^[a-zA-Z0-9]+$/;
    if(!regex.test(username)) {
        return {status: false, errors: ["Username must not contain '&', '$', '%, '-', '_'"]}
    }
    if(username.length >= 4 && username.length <= 20) {
        return {status: true};
    }
    return {status: false, errors: ["Username must be between 6 and 30 characters"]}
}

module.exports = {
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
    isUsernameValid
}