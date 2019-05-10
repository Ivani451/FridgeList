import React, { Component } from "react";
import { connect } from "react-redux";
import LoggedOnHeader from "./LoggedOnHeader";
import LoggedOffHeader from "./LoggedOffHeader";

// Header/Navigation bar on top of web page. NavLink used for quicker navigation. Hyperlink tags used for refreshing the page in order to
// be directed into the oauth flow when clicking on the login button and to clear previous search results when clicking the home button.
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

  // NavLink used for quicker navigation to the "new recipe" page. Otherwise, a regular "href" element is used to refresh page completely.
  // Google login button is rendered differently based on user authentication
  render() {
    console.log(this.props);
    return <span>{this.renderContent()}</span>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
