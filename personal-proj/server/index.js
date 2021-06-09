//IMPORTS
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

//ENV
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

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
app.get('/api/extras', productCtrl.getUtahExtras)

//CART
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:product_id', cartCtrl.addToCart)
app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart)
app.put(`/api/cart/:product_id`, cartCtrl.changeCartQty)

// //CALENDAR
// app.post('/api/cart/:product_id', calendarCtrl.addStartDate)