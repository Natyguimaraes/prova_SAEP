//bd

import mysql from 'mysql';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789',
    database:'todolist'
});

export default connection;