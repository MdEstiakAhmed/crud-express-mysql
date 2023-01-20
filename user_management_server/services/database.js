const db = require("../config/db");

const createTable = async () => {
    let sql = "CREATE TABLE Persons ( id int PRIMARY KEY AUTO_INCREMENT, name varchar(255), username varchar(255), email varchar(255), avatar varchar(255), role varchar(255) DEFAULT 'admin', password varchar(255), status boolean, attempt int);";
    const result = await db.query(sql, [email, password]);
    return result;
}

module.exports = {
    createTable
}