const express = require("express");
const app = express();

const mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profileRoutes");
const questionRoutes = require("./routes/questionRoutes");

const cors = require("cors");

// add swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

//passport setup
const passportSetup = require("./config/passport_setup");

// port
const PORT = process.env.PORT || 8080;

// add cors
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false, // if true: only transmit cookie over https
      httpOnly: false, // if true: prevents client side JS from reading the cookie
      maxAge: 1000 * 60 * 60 * 60, // session max age in milliseconds
      sameSite: "lax", // make sure sameSite is not none
    },
  })
);

//initialize passport with cookies
app.use(passport.initialize());

//initailize passport to use session cookie
app.use(passport.session());

//connect Database
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected to MongoDb");
});

//Base route
app.get("/", (req, res) => {
  res.send({ mssg: "Welcome to Compartibility Checker" });
});

// add swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/question", questionRoutes);

app.listen(PORT, () => {
  console.log(`server has started 'http://localhost:${PORT}'`);
});
