import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFood } from "../actions";

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

    // We set state to an empty string to clear the term when the search bar re-renders
    this.setState({ term: "" });
  }

  // Our input field is paired with our component's state
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="search by ingredients"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
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
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
