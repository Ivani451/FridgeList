import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFood } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    /*  
        Here we bind 'this' to onInputChange. Without it, onInputChange does not 
        have the right context for what 'this' is and we would not be able to
        use 'this.setState' in onInputChange. In general, if we pass a callback
        function and the callback has a reference to 'this', we need to bind the context.
    */
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  // Prevents the page from refreshing after the "submit" button is clicked
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchFood();
    // We set state to an empty string to clear the term when the search bar re-renders
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search for an ingredient"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

/* 
    A controlled field is a form element where the value of the input is set by the
    state of our component, not the other way around.
*/

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
