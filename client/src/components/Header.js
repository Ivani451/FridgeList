import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Header/Navigation bar on top of web page. NavLink used for quicker navigation. Hyperlink tags used for refreshing the page in order to
// be directed into the oauth flow when clicking on the login button and to clear previous search results when clicking the home button.
class Header extends Component {
  render() {
    console.log(this.props);
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

        <a href="/auth/google/" className="header-button" id="google-login">
          <p>Login with Google</p>
        </a>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
