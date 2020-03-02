const express = require("express");
const cookieSession = require("cookie-session");
// We are not exporting anything out of passport.js, we just want to run it and so we require
// the passport file without assigning it to a variable
require("./services/passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const morgan = require("morgan");
const passport = require("passport");

let app = express();

// middleware setup to body-parser, morgan, and CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// importing and using the route handlers with the express app
require("./routes")(app);
require("./routes/authRoutes")(app);

app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

if (process.env.NODE_ENV === "production") {
  // If we're in the production environment, then we will serve our production code
  app.use(express.static("client/build"));

  // if the route is not recognized by express, then index.html is still served
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// app.get("/", (req, res) =>
//   res.status(200).send({
//     message: "Welcome to the default API route"
//   })
// );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
