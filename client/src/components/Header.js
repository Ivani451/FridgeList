import React from "react";
import { NavLink } from "react-router-dom";

// Header/Navigation bar on top of web page. NavLink used for quicker navigation. Hyperlink tags used for refreshing the page in order to
// be directed into the oauth flow when clicking on the login button and to clear previous search results when clicking the home button.
export default function Header() {
  return (
    <nav id="main-header">
      <a href="/" id="header-logo">
        <h3>Fridge List</h3>
      </a>

      <a href="/" className="header-button">
        <p>Home</p>
      </a>

      <NavLink
        to="/recipe/new"
        activeClassName="active"
        className="header-button"
      >
        <p>Add Recipe</p>
      </NavLink>

      <a href="/auth/google/" className="header-button">
        <p>Login with Google</p>
      </a>
    </nav>
  );
}
