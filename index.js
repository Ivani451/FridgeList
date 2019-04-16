const express = require("express");
require("./services/passport");
const bodyParser = require("body-parser");
const morgan = require("morgan");

let app = express();

// middleware setup to body-parser, morgan, and CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing and using the routes with express
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

app.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the default API route"
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
