const mysql = require("mysql")

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'event-ranking'
})

conn.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Connected in sucessfull");
    }
})

module.exports = conn;