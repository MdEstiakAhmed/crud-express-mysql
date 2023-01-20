const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
    let token = req.headers.token ? req.headers.token : null;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.APP_SECRET_KEY);
            req.user = decoded;
            next();
        } catch (err) {
            res.send({
                message: "Invalid token",
                status: false,
                code: 400,
                accessRevoked: true,
            });
        }
    } else {
        res.send({
            message: "Unauthorized access",
            status: false,
            code: 401,
            accessRevoked: true,
        });
    }
};

module.exports = {
    checkLogin,
};
