import React, { Component } from "react";
import { connect } from "react-redux";

class FoodList extends Component {
  renderFood(food) {
    return (
      <div>
        <h2>{food.title}</h2>
      </div>
    );
  }

  render() {
    return <h1>{this.props.food.map(this.renderFood)}</h1>;
  }
}

function mapStateToProps({ food }) {
  return { food };
}

export default connect(mapStateToProps)(FoodList);
