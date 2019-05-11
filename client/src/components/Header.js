import React, { Component } from "react";
import { connect } from "react-redux";
import LoggedOnHeader from "./LoggedOnHeader";
import LoggedOffHeader from "./LoggedOffHeader";

// Google login button is rendered differently based on user authentication status in the store - see "LoggedOnHeader" and "LoggedOffHeader"
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <LoggedOffHeader />;
      default:
        return <LoggedOnHeader />;
    }
  }

  render() {
    return <span>{this.renderContent()}</span>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
