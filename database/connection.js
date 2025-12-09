const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'express_blog_sql'

});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected to MySQL');
})
module.exports = connection;