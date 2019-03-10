const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pg = require("pg");

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

// database configuration
let pool = new pg.Pool({
  user: "aws_postgres",
  database: "aws_postgres",
  password: "haze2tha451",
  host: "mydbinstance.cwjnu9ovvpww.us-east-2.rds.amazonaws.com",
  port: 5432,
  max: 10
});

// connecting to and making a GET request to our postgres database
app.get("/recipe", (req, res) => {
  pool.connect((err, db, done) => {
    db.query("SELECT * FROM recipe", (err, table) => {
      done();
      if (err) {
        return console.log(err);
      }
      if (err) {
        res.status(400).json({ error });
      }
      if (table.rows < "1") {
        res.status(404).send({
          status: "Failed",
          message: "No recipe information found"
        });
      } else {
        res.status(200).send({
          status: "Success",
          message: "Recipe information retrieved",
          recipes: table.rows
        });
      }
    });
  });
});

const PORT = process.env.PORT || 3000;

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the default API route"
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
