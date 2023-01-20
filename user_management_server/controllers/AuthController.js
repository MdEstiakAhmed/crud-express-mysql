const { loginUser, createAdmin, UpdateWrongLoginAttempt, BlockUser } = require("../services/AuthService");
const { passwordEncrypt, passwordCompare } = require("../utils/passwordHash");

const SignIn = async (req, res) => {
    try {
        let { email, password } = req.fields;
        // get user from db
        const response = await loginUser(email);

        // check if user exists
        if (!response.length) {
            return res.send({ status: false, errors: [`Invalid credential`] });
        }

        // check if user is blocked
        if(!response[0].status){
            return res.send({ status: false, errors: [`Account blocked. Please contact Administrator`] });
        }

        // check if password is correct
        let hashedPassword = response[0].password;
        let isEquals = await passwordCompare(password, hashedPassword);
        if (!isEquals) {
            // update wrong login attempt
            const increaseAttempt = await UpdateWrongLoginAttempt(email);
            let attemptLeft = (response[0].attempt < 4) ? (4 - (response[0].attempt + 1)) : 0;
            
            if(attemptLeft === 0){
                // block user
                const blockUser = await BlockUser(email);
                return res.send({ status: false, errors: [`Account blocked. Please contact Administrator`] });
            }
            return res.send({ status: false, errors: [`Invalid credential. ${attemptLeft} attempt left.`] });
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