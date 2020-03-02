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
        <a href="/recipes" id="header-logo-large">
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

      <nav class="header-medium">
        <header class="header">
          <a href="/" id="header-logo-medium" class="logo">
            <h3>F L</h3>
          </a>

          <input class="menu-btn" type="checkbox" id="menu-btn" />

          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>

          <ul class="menu">
            <li>
              <a href="/" className="header-button">
                <p>Home</p>
              </a>
            </li>
            <li>
              <NavLink
                to="/recipe/new"
                activeClassName="active"
                className="header-button"
              >
                <p>Add Recipe</p>
              </NavLink>
            </li>
            <li>
              <a
                href="/api/logout/"
                className="header-button"
                id="google-login"
              >
                <p>Logout</p>
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

export default LoggedOnHeader;
