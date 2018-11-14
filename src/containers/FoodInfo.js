import React, { Component } from "react";
import { connect } from "react-redux";

class FoodInfo extends Component {
  renderInfo(food) {
    return (
      <div className="food-info">
        <h4>{food.title}</h4>
        <p>Prep time: {food.preparationMinutes} minutes</p>
        <p>Servings: {food.servings}</p>
        <p>Instructions: {food.instructions}</p>
        <p>By {food.creditsText}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.info.map(this.renderInfo, this)}</h1>
      </div>
    );
  }
}

function mapStateToProps({ info }) {
  return {
    info
  };
}

export default connect(
  mapStateToProps,
  null
)(FoodInfo);
