// const mysql = require('mysql2/promise');
// require('dotenv').config();

// const con = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
/////2 tentativa
// module.exports = con;
// const mysql = require('mysql2/promise');
// require('dotenv').config();

// // Verificar variáveis do .env
// console.log("HOST:", process.env.DB_HOST);
// console.log("PORT:", process.env.DB_PORT);
// console.log("USER:", process.env.DB_USER);
// console.log("PASSWORD:", process.env.DB_PASSWORD ? "Configurada" : "Vazia");
// console.log("DATABASE:", process.env.DB_NAME);

// // Criar conexão
// const con = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// module.exports = con;
//////3 tentativa

const mysql = require('mysql2/promise');
require('dotenv').config({
    path: require('path').resolve(__dirname, '../../.env')
});

console.log("HOST:", process.env.DB_HOST);
console.log("PORT:", process.env.DB_PORT);
console.log("USER:", process.env.DB_USER);
console.log("DATABASE:", process.env.DB_NAME);

const con = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = con;