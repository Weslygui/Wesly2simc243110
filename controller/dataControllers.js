const db = require('../db')

exports.getproducts = (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if ( err) return res.status
        (500).json({error: err})
        res.json(result)
    })
}