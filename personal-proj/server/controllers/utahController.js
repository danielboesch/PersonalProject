module.exports = {
    getUtahProducts: (req, res) => {
        const db = req.app.get('db')
        db.products.get_products().then(vans => {
            res.status(200).send(vans)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err) 
        })
    }
}
