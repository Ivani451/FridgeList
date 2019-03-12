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

  // conneting to and making a POST request to our postgres database
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
          res.status(400).json({ error });
        }
        res.status(202).send({
          status: "Successful",
          result: result.rows[0]
        });
      });
    });
  });
};
