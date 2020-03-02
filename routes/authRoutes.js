const passport = require("passport");

/* 
  When user goes to this route, passport begins the authentication process with the Google strategy.
  The scope is the specific information that the application (Fridge List) is allowed to receive from Google.
*/

module.exports = app => {
  app.get(
    "/auth/google/",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // User is redirected to the frontpage (home) of our website when this route used
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  // User is logged out and redirected to the frontpage when this route is used
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // The user's info is sent to them when this route is used
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
