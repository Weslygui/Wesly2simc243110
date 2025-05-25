const express = require("express")
const cors = require("cors")
const e = require("cors")
const mysql = require("mysql");
const PORT = 3000
const app = express()

app.use(cors())
app.use(express.static('public'))
app.use('/assets', express.static('assets'));

app.listen(8000, () => {
    console.log("server ready")
})

app.use(express.json());

app.use('/api/products', require ('./router/dataRouter'))

// http://localhost:3000/api/skills


app.listen(PORT, () => {
    console.log("server ready di http:localhost:${PORT}")
})
