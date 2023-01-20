const bcrypt = require('bcryptjs');

const passwordEncrypt = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const passwordCompare = async (password, hash) => {
    const result = await bcrypt.compare(password, hash);
    return result;
}

module.exports = {
    passwordEncrypt,
    passwordCompare
}