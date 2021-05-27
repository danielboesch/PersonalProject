//IMPORTS
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

//ENV
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

//CONTROLLERS
const authCtrl = require("./controllers/authController");
const utahCtrl = require('./controllers/utahController');

//APP INSTANCE CREATED
const app = express();

//TOP LEVEL MIDDLEWARE
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 2345678 },
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

//LOCATIONS
app.get('/api/products', utahCtrl.getUtahProducts)