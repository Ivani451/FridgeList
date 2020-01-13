import React from "react";
import SearchBar from "containers/SearchBar";

//  Hyperlink tags used for refreshing the page in order to be directed into the oauth flow when clicking on the login button
const LoggedOffHeader = () => {
  return (
    <div>
      <nav class="header-large">
        <a href="/" id="header-logo-large">
          <h2>
            Fridge <i className="fa fa-cutlery"></i> List
          </h2>
        </a>

        <SearchBar />

        <button class="google-btn-over">
          <a href="/auth/google/" id="google-link">
            <div class="google-btn">
              <div class="google-icon-wrapper">
                <img
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <p class="btn-text">
                <b>Sign in with Google</b>
              </p>
            </div>
          </a>
        </button>
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
        <a href="/" id="header-logo-medium">
          <h3>
            F <i id="cutlery-logo" className="fa fa-cutlery"></i> L
          </h3>
        </a>
        <SearchBar />
        <nav id="nav-links-medium">
          <a href="/recipes" className="header-button">
            <p>Home</p>
          </a>
          <a href="/auth/google/" className="header-button">
            {" "}
            <p>
              {" "}
              <i id="google-logo" className="fa fa-google"></i> Login
            </p>
          </a>
        </nav>
      </nav>
    </div>
  );
};

/* 
  main-header-medium is the header that is showed to the user when the screen size
  is either 800px or below.
*/

export default LoggedOffHeader;
