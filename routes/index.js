const pg = require("pg");
const db = require("../config/db");

// database configuration
let pool = new pg.Pool({
  user: db.user,
  database: db.database,
  password: db.password,
  host: db.host,
  port: db.port,
  max: db.max
});

module.exports = app => {
  // connecting to and making a GET request to our postgres database
  app.get("/recipe", (req, res) => {
    pool.connect((err, client, done) => {
      client.query("SELECT * FROM recipe", (error, result) => {
        done();
        if (error) {
          res.status(400).json({ error });
        }
        if (result.rows < "1") {
          res.status(404).send({
            status: "Failed",
            message: "No recipe information found"
          });
        } else {
          res.status(200).send({
            status: "Succesful",
            message: "Recipe information retrieved",
            recipes: result.rows
          });
        }
      });
    });
  });

  // connecting to and making a POST request to our postgres database
  app.post("/recipe", (req, res) => {
    const data = {
      title: req.body.title,
      prep_time: req.body.prep_time,
      servings: req.body.servings,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      author: req.body.author
    };

    pool.connect((err, client, done) => {
      const values = [
        data.title,
        data.prep_time,
        data.servings,
        data.ingredients,
        data.instructions,
        data.author
      ];

      const query =
        "INSERT INTO recipe(title, prep_time, servings, ingredients, instructions, author) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";

      client.query(query, values, (error, result) => {
        done();
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(202).send({
          status: "Success",
          result: result.rows[0]
        });
      });
    });
  });

  // connecting to and making a GET request to our postgres database by ID
  app.get("/recipe/:id", (req, res) => {
    pool.connect((err, client, done) => {
      client.query(
        "SELECT * FROM recipe WHERE id = $1",
        [req.params.id],
        (error, result) => {
          done();
          if (error) {
            console.log(req.params.id);
            return res.status(400).json({ error });
          }
          res.status(202).json({
            status: "Success",
            result: result.rows[0]
          });
        }
      );
    });
  });

  app.delete("/recipe/:id", (req, res) => {
    pool.connect((err, client, done) => {
      client.query(
        "DELETE FROM recipe WHERE id = $1",
        [req.params.id],
        (error, result) => {
          done();
          if (error) {
            console.log(req.params.id);
            return res.status(400).json({ error });
          }
          res.status(202).json({
            status: "Success",
            message: `Recipe ${req.params.id} deleted`
          });
        }
      );
    });
  });
};
