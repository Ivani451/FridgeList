import React, { Component } from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
import { bindActionCreators } from "redux";
import { fetchFood } from "../actions";

class FoodList extends Component {
  componentDidMount() {
    const handle = this.props.match.params.ingredients;

    // the URL paramater handle that was passed in by our SearchBar container is modified to replace the spaces with commas in order to make it readable to the Spoonacular API
    let addCommas = handle.replace(/[ ,]+/g, ",");

    this.props.fetchFood(addCommas);
  }

  render() {
    return (
      <div>
        <Recipe foods={this.props.food} />
      </div>
    );
  }
}

function mapStateToProps({ food }) {
  return {
    food,
  };
}

/* 
    Here we connect our action creator "fetchFood" to the search bar so we can
    use the action creator as a prop for the search bar

*/

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFood }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);

/* 
  withRouter is used with Redux and has to be done in this specific order. The following is
  incorrect:
  
connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
*/
