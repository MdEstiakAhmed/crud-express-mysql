const { isUsernameValid, isEmailValid, isPasswordValid, isConfirmPasswordValid } = require("../../utils/inputValidation");

const formValidator = (req, res, next) => {
    const { name, username, email, password, confirmPassword } = req.fields;

    // name validation
    if (!name) return res.send({ status: false, errors: ["Name is required"] });

    // username validation
    let usernameRes = isUsernameValid(username);
    if (!usernameRes.status) return res.send({ status: false, errors: usernameRes.errors });

    // email validation
    let emailRes = isEmailValid(email);
    if (!emailRes.status) return res.send({ status: false, errors: emailRes.errors });

    // password validation
    if (password) {
        let passwordRes = isPasswordValid(password);
        if (!passwordRes.status) return res.send({ status: false, errors: emailRes.errors });

        let confirmPasswordRes = isConfirmPasswordValid(password, confirmPassword);
        if (!confirmPasswordRes.status) return res.send({ status: false, errors: emailRes.errors });
    }
    next()
}

module.exports = formValidator;