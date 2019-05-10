import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LoggedOnHeader extends Component {
  render() {
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

        <a href="/api/logout/" className="header-button" id="google-login">
          <p>Logout</p>
        </a>
      </nav>
    );
  }
}
