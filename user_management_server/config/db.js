require('dotenv').config()
const mysql = require('mysql2');
class DB {
    constructor() {
        this.pool = mysql.createPool({
            port: 3306,
            host: "localhost",
            user: "root",
            password: "",
            database: "express_mysql_crud",
            // connectionLimit: 10
        })
    }
    query = (sql, values) => {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, values, async (error, result, field) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
}

module.exports = new DB;