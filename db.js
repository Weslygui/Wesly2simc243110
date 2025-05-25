const mysql = require("mysql")

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '' ,
    database: 'produkdb'
})

db.connect((err) =>{
    if (err) throw err
    console.log("database cocok")
})
module.exports = db