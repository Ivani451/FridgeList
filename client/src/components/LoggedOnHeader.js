import React from "react";
import { NavLink } from "react-router-dom";

/* 
  NavLink used for quicker navigation to the "new recipe" page. Otherwise, a regular "href" element is used to refresh page completely
  and to clear previous search results when clicking the home button.
*/
const LoggedOnHeader = () => {
  return (
    <nav id="main-header">
      <a href="/recipes" id="header-logo">
        <h3>Fridge List</h3>
      </a>

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
  );
};

export default LoggedOnHeader;
