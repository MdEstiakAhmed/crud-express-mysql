const db = require("../config/db");

const loginUser = async (email) => {
    let sql = 'select * from users where email=?';
    const result = await db.query(sql, [email]);
    return result;
}
const UpdateWrongLoginAttempt = async (email) => {
    sql = 'UPDATE users set attempt = attempt + 1 where email=?';
    options = [email]
    let result = await db.query(sql, options);
    return result;
}
const BlockUser = async (email) => {
    sql = 'UPDATE users set status = false where email=?';
    options = [email]
    let result = await db.query(sql, options);
    return result;
}
const createAdmin = async ({ name, username, email, avatar, role = "admin", password, status = true, attempt = 0 }) => {
    let sql = 'INSERT INTO users (name, username, email, avatar, role, password, status, attempt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await db.query(sql, [name, username, email, avatar, role, password, status, attempt]);
    return result;
}

module.exports = {
    loginUser,
    createAdmin,
    UpdateWrongLoginAttempt,
    BlockUser
}