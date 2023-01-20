const { loginUser, createAdmin } = require("../services/AuthService");
const { passwordEncrypt, passwordCompare } = require("../utils/passwordHash");

const SignIn = async (req, res) => {
    try {
        let { email, password } = req.fields;
        const response = await loginUser(email)
        if (!response.length) {
            return res.send({ status: false, errors: ["Invalid credential"] });
        }
        let hashedPassword = response[0].password;
        let isEquals = await passwordCompare(password, hashedPassword);
        if (!isEquals) {
            return res.send({ status: false, errors: ["Invalid credential"] });
        }
        return res.send({ status: true, message: "Successfully logged in", data: response[0] });
    }
    catch (error) {
        return res.send({ status: false, message: error.message })
    }
}
const Signup = async (req, res) => {
    try {
        let data = {
            name: "Admin",
            username: "IAmAdmin",
            email: "admin@app.com",
            avatar: "",
            role: "admin",
            password: "Aa_10000",
            status: true,
            attempt: 0,
        };
        let hashedPassword = await passwordEncrypt(data.password)
        data.password = hashedPassword;
        const response = await createAdmin(data);
        console.log(response);
        return res.send({ status: true, message: "" });
    }
    catch (error) {
        return res.send({ status: false, message: error.message })
    }
}

module.exports = {
    SignIn,
    Signup
}