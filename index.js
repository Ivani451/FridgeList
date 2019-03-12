const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

let app = express();

// middleware setup to body-parser, morgan, and CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("./routes")(app);

const PORT = process.env.PORT || 3000;

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the default API route"
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
