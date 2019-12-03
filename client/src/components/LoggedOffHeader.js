import React from "react";
import SearchBar from "containers/SearchBar";

//  Hyperlink tags used for refreshing the page in order to be directed into the oauth flow when clicking on the login button
const LoggedOffHeader = () => {
  return (
    <div>
      <nav class="header-large">
        <a href="/" id="header-logo">
          <h2>
            Fridge <i className="fa fa-cutlery"></i> List
          </h2>
        </a>

        <SearchBar />

        <a href="/auth/google/" className="header-button" id="google-login">
          <p>
            {" "}
            <i className="fa fa-google"></i> Sign in with Google
          </p>
        </a>
      </nav>

      <nav class="header-medium">
        <a
          href="JavaScript:void(0)"
          id="hamburger_icon"
          onClick={() => {
            var x = document.getElementById("nav-links-medium");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }}
        >
          <div class="hamburger_line"></div>
          <div class="hamburger_line"></div>
          <div class="hamburger_line"></div>
        </a>

        <a href="/" id="header-logo">
          <h3>Fridge List</h3>
        </a>

        <SearchBar />
        <nav id="nav-links-medium">
          <a href="/recipes" className="header-button">
            <p>Home</p>
          </a>
        </nav>

        <a href="/auth/google/" className="header-button" id="google-login">
          <p>
            {" "}
            <i className="fa fa-google"></i> Sign in with Google
          </p>
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
