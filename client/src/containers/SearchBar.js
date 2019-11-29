import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFood } from "../actions";
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

  // Prevents the page from refreshing after the "submit" button is clicked
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchFood(this.state.term);
    // after the user submits the form with the designated ingredients, the user is
    // redirected to the '/search-results' URL
    this.props.history.push("/search-results");

    // We set state to an empty string to clear the term when the search bar re-renders
    this.setState({ term: "" });
  }

  // Our input field is paired with our component's state
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="searchBar">
          <input
            id="search-bar"
            placeholder="search by ingredients"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button id="search-button" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFood }, dispatch);
}

/* 
    Here we connect our action creator "fetchFood" to the search bar so we can
    use the action creator as a prop for the search bar

*/
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SearchBar)
);

/* 
  withRouter is used with Redux and has to be done in this specific order. The following is
  incorrect:
  
connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));

*/
