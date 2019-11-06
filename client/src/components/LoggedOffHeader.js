import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "containers/SearchBar";

//  Hyperlink tags used for refreshing the page in order to be directed into the oauth flow when clicking on the login button
const LoggedOffHeader = () => {
  return (
    <div>
      <nav class="main-header-large">
        <a href="/Landing" id="header-logo">
          <h2>Fridge List</h2>
        </a>

        <SearchBar />

        <a href="/auth/google/" className="header-button" id="google-login">
          <p>Login with Google</p>
        </a>
      </nav>

      <nav class="main-header-medium">
        <div id="hamburger_icon">
          <div class="hamburger_line"></div>
          <div class="hamburger_line"></div>
          <div class="hamburger_line"></div>
        </div>

        <a href="/recipes" id="header-logo">
          <h3>Fridge List</h3>
        </a>

        <a href="/auth/google/" className="header-button" id="google-login">
          <p>Login with Google</p>
        </a>
      </nav>
    </div>
  );
};

/* 
  main-header-medium is the header that is showed to the user when the screen size
  is either 800px or below.
*/

export default LoggedOffHeader;
