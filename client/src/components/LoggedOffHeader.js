import React from "react";

//  Hyperlink tags used for refreshing the page in order to be directed into the oauth flow when clicking on the login button
const LoggedOffHeader = () => {
  return (
    <nav id="main-header">
      <a href="/Landing" id="header-logo">
        <h3>Fridge List</h3>
      </a>

      <a href="/auth/google/" className="header-button" id="google-login">
        <p>Login with Google</p>
      </a>
    </nav>
  );
};

export default LoggedOffHeader;
