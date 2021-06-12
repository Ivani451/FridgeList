import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    //  Here we bind 'this' to onInputChange and onFormSubmit to make use of our state's
    //  information with said functions.

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit() {
    // the string of ingredients (Example: "apple, orange, cherry")
    // is altered to remove the commas in order to make it more readable
    // in the URL
    let ingredientsURL = this.state.term.replace(/,/g, "");

    this.props.history.push(`/search-results/${ingredientsURL}`);
    // We set state to an empty string to clear the term when the search bar re-renders
    this.setState({ term: "" });
  }

  // Our input field is paired with our component's state
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="searchBar">
          <input
            className="search-bar"
            placeholder="search by ingredients"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button className="search-button" type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
