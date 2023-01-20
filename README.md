# crud-express-mysql

## Technology

- Node.js
- Express.js
- React.js
- MySQL

## Need to install

- [Node.js](https://nodejs.org/en/download/)
- [xampp](https://sourceforge.net/projects/xampp/)

## Follow the steps to setup database

- Start Apache and MySQL server from XAMPP
- Goto `http://127.0.0.1/phpmyadmin/` and create a database called `express_mysql_crud`
- Run the create query into the MySQL server for creating `users` table.

```
CREATE TABLE users (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(255),
    username varchar(255),
    email varchar(255),
    avatar varchar(255),
    role varchar(255) DEFAULT 'admin',
    password varchar(255),
    status boolean,
    attempt int
);
```

- Run the insert query into the MySQL server for inserting a row into `users` table.

```
INSERT INTO `users`(`name`, `username`, `email`, `avatar`, `role`, `password`, `status`, `attempt`) VALUES ('admin','admin','admin@app.com','','admin','11111',true,0)
```

## Follow the steps to run the application

- clone this repo. `git clone https://github.com/MdEstiakAhmed/crud-express-mysql.git`
- goto `user_management_server` folder and run `npm install`
- then start server with `npm run dev`
- after that goto `user_management_client` folder and run `npm install`
- then start server using `npm start`
- now open this ` http://127.0.0.1:3000` in a browser and enjoy

## Credential

|        | email          | password |
| ------ | -------------- | -------- |
| User-1 | admin@app.com  | Aa_10000 |
| User-2 | admin2@app.com | Aa_10000 |
| User-3 | admin3@app.com | Aa_10000 |
