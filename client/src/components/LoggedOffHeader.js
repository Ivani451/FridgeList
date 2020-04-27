import React from "react";
import SearchBar from "containers/SearchBar";

//  Hyperlink tags used for refreshing the page in order to be directed into the oauth flow when clicking on the login button
const LoggedOffHeader = () => {
  return (
    <div>
      <nav className="header-large">
        <a href="/" id="header-logo-large">
          <h2>
            Fridge <i className="fa fa-cutlery"></i> List
          </h2>
        </a>

        <SearchBar />

        <button className="google-btn-over">
          <a href="/auth/google/" id="google-link">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  alt="Google"
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with Google</b>
              </p>
            </div>
          </a>
        </button>
      </nav>

      <nav className="header-medium">
        <header className="header">
          <a href="/" id="header-logo-medium" className="logo">
            <h3>F L</h3>
          </a>

          <input className="menu-btn" type="checkbox" id="menu-btn" />

          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            <li>
              <a href="/" className="header-button">
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="/auth/google/" className="header-button">
                {" "}
                <p>
                  {" "}
                  <i id="google-logo" className="fa fa-google"></i> Login
                </p>
              </a>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

/* 
  main-header-medium is the header that is showed to the user when the screen size
  is either 800px or below.
*/

export default LoggedOffHeader;
