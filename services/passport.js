const pg = require("pg");
require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// database configuration
let pool = new pg.Pool({
  user: keys.DB_USER,
  database: keys.DB_DATABASE,
  password: keys.DB_PASSWORD,
  host: keys.DB_HOST,
  port: keys.DB_PORT,
  max: keys.DB_MAX
});

// passport serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// passport setup using a Google strategy.
// callbackURL is the URL that passport sends the user to after permission is granted to Google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // the route the user is sent to after they grant Google permission
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      pool.connect((poolErr, poolClient, poolDone) => {
        if (poolErr) {
          return console.error("pool client fetch error", poolErr);
        }

        // Here we attempt to find the user in our database using their Google ID
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
              /*
                If the user was not found in our database, then a new user is created and saved. The user's Google ID, 
                name, and profile picture are saved for future reference. 
              */
              poolClient.query(
                "INSERT INTO users(googleid, first_name, profile_picture) VALUES($1, $2, $3) RETURNING *",
                [profile.id, profile.name.givenName, profile.photos[0].value],
                (error, result) => {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Added the user to the database");
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
