const { isEmailValid, isPasswordValid } = require("../../utils/inputValidation");

const loginValidator = (req, res, next) => {
    console.log("loginValidator");
    const { email, password } = req.fields;

    // email validation
    let emailRes = isEmailValid(email);
    if (!emailRes.status) return res.send({ status: false, errors: emailRes.errors });

    // password validation
    if (password) {
        let passwordRes = isPasswordValid(password);
        if (!passwordRes.status) return res.send({ status: false, errors: emailRes.errors });
    }
    next()
}

module.exports = loginValidator;