const express = require("express");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const fs = require("fs");

const path = require("path");

const passport = require("passport");
const passportLocal = require("./config/passport-local");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.static("assets"));

app.use(
  session({
    name: "smit",
    secret: "CODE",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000 * 60 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.datashow)

app.use("/", require("./routes/admin_routes/admin_R"));
app.use('/user',require('./routes/user_routes/index'));

app.listen(port, (err) => {
  if (err) {
    console.log("port is not running");
    return false;
  }
  console.log("port is running on", port);
});
