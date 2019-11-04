import React from "react";
import { NavLink } from "react-router-dom";

/* 
  NavLink used for quicker navigation to the "new recipe" page. Otherwise, a regular "href" element is used to refresh page completely
  and to clear previous search results when clicking the home button.
*/
const LoggedOnHeader = () => {
  return (
    <div>
      <nav class="main-header-large">
        <a href="/recipes" id="header-logo">
          <h3>Fridge List</h3>
        </a>

        <a href="/" className="header-button">
          <p>Home</p>
        </a>

        <a href="/recipes" className="header-button">
          <p>My Recipes</p>
        </a>

        <NavLink
          to="/recipe/new"
          activeClassName="active"
          className="header-button"
        >
          <p>Add Recipe</p>
        </NavLink>

        <a href="/api/logout/" className="header-button" id="google-login">
          <p>Logout</p>
        </a>
      </nav>

      <nav class="main-header-medium">
        <a
          href="JavaScript:void(0)"
          id="hamburger_icon"
          onClick={() => {
            var x = document.getElementById("nav-links");
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

        <div id="nav-links">
          <a href="/recipes" className="header-button">
            <p>Home</p>
          </a>

          <NavLink
            to="/recipe/new"
            activeClassName="active"
            className="header-button"
          >
            <p>Add Recipe</p>
          </NavLink>

          <a href="/api/logout/" className="header-button" id="google-login">
            <p>Logout</p>
          </a>
        </div>
        <a href="/recipes" id="header-logo">
          <h3>Fridge List</h3>
        </a>
      </nav>
    </div>
  );
};

/*
  onClick function on the hamburger icon toggles navigation list style from "none" to "block," which displays
  the hidden navigation bar.
*/
export default LoggedOnHeader;
