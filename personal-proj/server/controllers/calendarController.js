// module.exports = {
//     addStartDate: (req, res) => {
//         const db = req.app.get('db')
//         const {user} = req.session
//         const {start_date} = req.params

//         if(!user){
//             return res.status(401).send('User not logged in.')
//         }
//         db.cart.get_start_date(user.cart_id, start_date)
//         .then(() => {
//             res.sendStatus(200)
//         }).catch(err => {
//             console.log(err)
//             res.status(500).send(err)
//         })
//     }
// }