const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pg = require("pg");

// database configuration
let pool = new pg.Pool({
  user: "aws_postgres",
  database: "aws_postgres",
  password: "haze2tha451",
  host: "mydbinstance.cwjnu9ovvpww.us-east-2.rds.amazonaws.com",
  port: 5432,
  max: 10
});

// connecting to the database
pool.connect((err, db, done) => {
  if (err) {
    return console.log(err);
  } else {
    db.query("SELECT * FROM recipe", (err, table) => {
      done();
      if (err) {
        return console.log(err);
      } else {
        console.log(table);
      }
    });
  }
});

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
