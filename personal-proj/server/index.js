//IMPORTS
require("dotenv").config({path: __dirname + '/../.env'});
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const fs = require('fs')

//ENV
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, STRIPE_SECRET_KEY, STRIPE_PUBLIC_KEY} = process.env;
// console.log(STRIPE_SECRET_KEY);
// console.log(STRIPE_PUBLIC_KEY);



//CONTROLLERS
const authCtrl = require("./controllers/authController");
const productCtrl = require('./controllers/utahController');
const cartCtrl = require('./controllers/cartController')
const calendarCtrl = require('./controllers/calendarController')


//APP INSTANCE CREATED
const app = express();

//TOP LEVEL MIDDLEWARE
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 *60 *60 *24 },
  })
);

//DATABASE CONNECTION
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("Database Connected");
    app.listen(SERVER_PORT, () =>
      console.log(`Server listening on port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

  
  //ENDPOINTS
  app.post("/auth/register", authCtrl.register);
  app.post("/auth/login", authCtrl.login);
  app.get("/auth/logout", authCtrl.logout);
  
  //PRODUCTS
  app.get('/api/products', productCtrl.getUtahProducts)
  
  //CART
  app.get('/api/cart', cartCtrl.getCart)
  app.post('/api/cart/:product_id', cartCtrl.addToCart)
  app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart)
  app.put(`/api/cart/:product_id`, cartCtrl.changeCartQty)
  
  // //CALENDAR
  // app.post('/api/cart/:product_id', calendarCtrl.addStartDate)

  //hello
  
  
  //HOSTING
  app.use(express.static (__dirname + '/../build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index/html'))
  })