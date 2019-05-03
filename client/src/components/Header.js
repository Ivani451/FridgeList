import React from "react";
import { NavLink } from "react-router-dom";

// Header/Navigation bar on top of web page
export default function Header() {
  return (
    <nav className="top-nav">
      <span id="header-logo">
        <h3>Fridge List</h3>
      </span>

      <NavLink to="/" activeClassName="active" className="header-button">
        <p>Home</p>
      </NavLink>

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
