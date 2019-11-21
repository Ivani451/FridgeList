import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "containers/SearchBar";

/* 
  NavLink used for quicker navigation to the "new recipe" page. Otherwise, a regular "href" element is used to refresh page completely
  and to clear previous search results when clicking the home button.
*/
const LoggedOnHeader = () => {
  return (
    <div>
      <div class="header-large">
        <a href="/recipes" id="header-logo">
          <h3>
            Fridge <i className="fa fa-cutlery"></i> List
          </h3>
        </a>

        <SearchBar />

        <a href="/recipes" className="header-button">
          <p>
            {" "}
            <i className="fa fa-book"></i> My Recipes
          </p>
        </a>

        <NavLink
          to="/recipe/new"
          activeClassName="active"
          className="header-button"
        >
          <p>
            <i className="fa fa-plus"></i> Add Recipe
          </p>
        </NavLink>

        <a href="/api/logout/" className="header-button" id="google-login">
          <p>
            <i className="fa fa-user"></i> Logout
          </p>
        </a>
      </div>

      <div class="header-medium">
        <div>
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
        </div>

        <a href="/recipes" id="header-logo">
          <h3>Fridge List</h3>
        </a>

        <SearchBar />
        <nav id="nav-links-medium">
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
        </nav>
      </div>
    </div>
  );
};

/*
  onClick function on the hamburger icon toggles navigation list style from "none" to "block," which displays
  the hidden navigation bar.
*/
export default LoggedOnHeader;
