import React, { Component } from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";

class FoodList extends Component {
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
    food
  };
}

export default connect(
  mapStateToProps,
  null
)(FoodList);
