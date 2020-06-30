const pg = require("pg");
require("dotenv").config();
// const keys = require("../config/keys");

// database configuration
let pool = new pg.Pool({
  user: "aws_postgres",
  database: "aws_postgres",
  password: "haze2tha451",
  host: "mydbinstance.cwjnu9ovvpww.us-east-2.rds.amazonaws.com",
  port: "5432",
  max: "10",
});

module.exports = (app) => {
  // connecting to and making a GET request to our postgres database
  app.get("/api/recipes", (req, res) => {
    pool.connect((err, client, done) => {
      client.query(
        `SELECT * FROM recipe WHERE user_id=${req.user.rows[0].id}`,
        (error, result) => {
          done();
          if (error) {
            res.status(400).json({ error });
          }
          if (result.rows < "1") {
            res.status(404).send({
              status: "Failed",
              message: "No recipe information found",
            });
          } else {
            res.status(200).send({
              status: "Succesful",
              message: "Recipe information retrieved",
              recipes: result.rows,
            });
          }
        }
      );
    });
  });

  // connecting to and making a POST request to our postgres database
  app.post("/api/recipe", (req, res) => {
    console.log(req.user.rows[0].id);
    const data = {
      title: req.body.title,
      prep: req.body.preparationMinutes || req.body.prep,
      servings: req.body.servings,
      instructions: req.body.instructions,
      author: req.body.creditsText || req.body.author,
      sourceUrl: req.body.sourceUrl,
      user_id: req.user.rows[0].id,
    };

    pool.connect((err, client, done) => {
      const values = [
        data.title,
        data.prep,
        data.servings,
        data.instructions,
        data.author,
        data.sourceUrl,
        data.user_id,
      ];

      const query =
        "INSERT INTO recipe(title, prep, servings, instructions, author, source, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";

      client.query(query, values, (error, result) => {
        done();
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(202).send({
          status: "Success",
          result: result.rows[0],
        });
      });
    });
  });

  // Making post request for the list of ingredients and saving them in a separate table

  app.post("/api/ingredients", (req, res) => {
    console.log(req.body.extendedIngredients);

    let hello = (arr) => {
      let ingArr = [];
      for (let i = 0; i < arr.length; i++) {
        ingArr.push(arr[i].name);
        console.log(ingArr);
      }
      return ingArr;
    };

    let cool = hello(req.body.extendedIngredients);

    const data = {
      ingredients: cool,
    };

    pool.connect((err, client, done) => {
      const values = [data.ingredients];

      const query =
        "INSERT INTO food(ingredients) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";

      client.query(query, values, (error, result) => {
        done();
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(202).send({
          status: "Success",
          result: result.rows[0],
        });
      });
    });
  });

  //**********************************************************************

  // connecting to and making a GET request to our postgres database by ID
  app.get("/api/recipe/:id", (req, res) => {
    pool.connect((err, client, done) => {
      client.query(
        "SELECT * FROM recipe WHERE id = $1",
        [req.params.id],
        (error, result) => {
          done();
          if (error) {
            return res.status(400).json({ error });
          }
          res.status(202).json({
            status: "Success",
            result: result.rows[0],
          });
        }
      );
    });
  });

  app.delete("/api/recipe/:id", (req, res) => {
    pool.connect((err, client, done) => {
      client.query(
        "DELETE FROM recipe WHERE id = $1",
        [req.params.id],
        (error, result) => {
          done();
          if (error) {
            return res.status(400).json({ error });
          }
          res.status(202).json({
            status: "Success",
            message: `Recipe ${req.params.id} deleted`,
          });
        }
      );
    });
  });
};
