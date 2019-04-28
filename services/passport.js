const pg = require("pg");
require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// database configuration
let pool = new pg.Pool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  max: process.env.DB_MAX
});

// passport serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log("fasodfo" + user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log(obj);
  done(null, obj);
});

// passport setup using a Google strategy.
// callbackURL is the URL that passport sends the user to after permission is granted to Google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      pool.connect((poolErr, poolClient, poolDone) => {
        if (poolErr) {
          return console.error("pool client fetch error", poolErr);
        }

        poolClient.query(
          "SELECT * FROM users WHERE googleid = $1",
          [profile.id],
          (error, result) => {
            if (error) {
              console.log(error);
            } else if (result.rows[0]) {
              done(null, result);
              return console.log(
                profile.id,
                profile.name.givenName,
                profile.photos[0].value
              );
            } else {
              poolClient.query(
                "INSERT INTO users(googleid, first_name, profile_picture) VALUES($1, $2, $3) RETURNING *",
                [profile.id, profile.name.givenName, profile.photos[0].value],
                (error, result) => {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("added the user to the database");
                    console.log(result);
                  }
                }
              );
            }
          }
        );
      });
    }
  )
);
