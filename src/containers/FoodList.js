import React, { Component } from "react";
import { connect } from "react-redux";

class FoodList extends Component {
  renderFood(food) {
    return (
      <div>
        <h2>{food.title}</h2>
        <h3>{food.id}</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.food.map(this.renderFood)}</h1>
      </div>
    );
  }
}

function mapStateToProps({ food }) {
  return { food };
}

export default connect(
  mapStateToProps,
  null
)(FoodList);
