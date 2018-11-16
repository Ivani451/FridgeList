import React, { Component } from "react";
import { connect } from "react-redux";

class FoodInfo extends Component {
  renderInfo(food) {
    return (
      <div className="food-info">
        <h4 className="food-title">{food.title}</h4>
        <p>Prep time: {food.preparationMinutes} minutes</p>
        <p>Servings: {food.servings}</p>
        <p>Instructions: {food.instructions}</p>
        <p>
          By <a href={food.sourceUrl}>{food.creditsText}</a>{" "}
        </p>
        Ingredients:
        {food.extendedIngredients.map(item => {
          return <p>{item.name}</p>;
        })}
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
