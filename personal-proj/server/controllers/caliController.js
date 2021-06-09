module.exports = {
    getCaliProducts: (req, res) => {
        const db = req.app.get('db')
        db.products.get_products().then(vans => {
            res.status(200).send(vans)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    getCaliExtras: (req, res) => {
        const db = req.app.get('db')
        db.extras.get_extras().then(extras => {
            res.status(200).send(extras)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err) 
        })
    }
}