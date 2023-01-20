const db = require("../config/db");

const getUsers = async () => {
    let sql = "select * from users;"
    const result = await db.query(sql);
    return result;
}

const getUser = async (id) => {
    let sql = 'select * from users where id = ?'
    const result = await db.query(sql, [id]);
    return result;
}

const createUser = async (params) => {
    let { name, username, email, avatar, role = "admin", password, status = true, attempt = 0 } = params;
    let sql = 'INSERT INTO users (name, username, email, avatar, role, password, status, attempt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    let result = await db.query(sql, [name, username, email, avatar, role, password, status, attempt]);
    return result;
}

const updateUser = async (params, id) => {
    let { name, username, email, avatar, password } = params;
    let sql, options;
    if(password){
        sql = 'UPDATE users set name=?, username=?, email=?, avatar=?, password=? where id=?';
        options =  [name, username, email, avatar, password, id]
    }
    else {
        sql = 'UPDATE users set name=?, username=?, email=?, avatar=? where id=?';
        options =  [name, username, email, avatar, id]
    }
    let result = await db.query(sql, options);
    return result;
}

const deleteUser = async (id) => {
    let sql = 'delete from users where id=?';
    let result = await db.query(sql, [id]);
    return result;
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}