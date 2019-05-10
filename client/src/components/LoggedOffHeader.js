import React, { Component } from "react";

export default class LoggedOffHeader extends Component {
  render() {
    return (
      <nav id="main-header">
        <a href="/" id="header-logo">
          <h3>Fridge List</h3>
        </a>

        <a href="/auth/google/" className="header-button" id="google-login">
          <p>Login with Google</p>
        </a>
      </nav>
    );
  }
}
