const jwt = require('jsonwebtoken');

const createToken = async (data) => {
    let payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data };
    return await jwt.sign(payload, process.env.APP_SECRET_KEY);
}

module.exports = createToken;