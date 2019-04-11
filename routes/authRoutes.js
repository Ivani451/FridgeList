const passport = require("passport");

/* 
  When user goes to this route, passport begins the authentication process with the Google strategy.
  The scope is the specific information that the application (ReciFridge) is allowed to receive from Google.
*/

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
