

module.exports = {
    getCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        
        if(!user){
            return res.status(401).send('User not logged in.')
        }
        db.cart.get_cart_items(user.cart_id).then(cartProducts => {
            res.status(200).send(cartProducts)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        const {startDate} = req.body
        const {endDate} = req.body

        console.log(req.body)

        if(!user){
            return res.status(401).send('User not logged in.')
        }
        db.cart.add_to_cart(user.cart_id, product_id, endDate, startDate)
        db.cart.add_to_products_cart(user.user_id, user.cart_id, startDate, endDate)
        .then((cart) => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteItemFromCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        if(!user){
          return res.status(401).send('User not logged in.')
        }
        db.cart.delete_item_from_cart(user.cart_id, product_id)
        .then((cart) => {
          res.status(200).send(cart)
        }).catch(err => {
          console.log(err)
          res.status(500).send(err)
        })
    },
    changeCartQty: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        const {quantity} = req.body
        if(!user){
            return res.status(401).send("User not logged in.")
        }
        db.cart.change_qty(user.cart_id, product_id, quantity)
        .then((cart) => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })

    }

}