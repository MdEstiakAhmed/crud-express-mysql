var jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) { return res.send({ status: false, message: "token undefined" }); }
        let jwtData = await jwt.verify(token, process.env.APP_SECRET_KEY);
        if (!jwtData) { return res.send({ status: false, message: "unauthorized" }); }
        req.headers.email = jwtData.email;
        req.headers._id = jwtData._id;
        next();
    }
    catch (error) {
        console.log(error);
        return res.send({ status: false, message: "unauthorized" });
    }
};
