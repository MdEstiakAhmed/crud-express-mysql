const db = require("../config/db");

const loginUser = async (email) => {
    let sql = 'select * from users where email=?';
    const result = await db.query(sql, [email]);
    return result;
}
const createAdmin = async ({name, username, email, avatar, role = "admin", password, status = true, attempt = 0}) => {
    let sql = 'INSERT INTO users (name, username, email, avatar, role, password, status, attempt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await db.query(sql, [name, username, email, avatar, role, password, status, attempt]);
    return result;
}

module.exports = {
    loginUser,
    createAdmin
}