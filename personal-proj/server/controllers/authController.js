const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer');


module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [result] = await db.auth.check_email(email)
        if(result){
            return res.status(409).send('An account with that email already exists.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.auth.register_user(email, hash)
        const [cart] = await db.cart.create_cart(user.user_id)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vanlifetravelexperience@gmail.com',
                pass: "asdfghjkl;'"
            }
            });
        
        const mailOptions = {
            from: 'vanlifetravelexperience@gmail.com',
            to: email,
            subject: 'Welcome to Nomad Travel Co.',
            text: "Hi there, thanks for making an account with Nomad Travel Co. If you have any questions about anything feel free to reach out. Happy Travels!" 
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if(error){
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response)
            }
        });
        delete user.password
        req.session.user = user
        req.session.user.cart_id = cart.cart_id
        // console.log(req.session)
        return res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.auth.check_email(email)
        console.log(req.body)
        if(!user){
            return res.status(401).send('User not found.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send('Password incorrect.')
        }
        const [cart] = await db.cart.get_cart(user.user_id)
        delete user.password
        req.session.user = user
        req.session.user.cart_id = cart.cart_id
        // console.log(req.session)
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.sendStatus(200)
        // console.log(req.session)
    },
    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    },
}