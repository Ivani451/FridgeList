import React, { Component } from "react";
import { connect } from "react-redux";

class FoodInfo extends Component {
  renderInfo({ food }) {
    return (
      <div className="food-info">
        <h4 className="food-title">{food.title}</h4>

        <p>
          <span className="recipe-main">Prep time:</span>
          {food.preparationMinutes} minutes
        </p>

        <p>
          <span className="recipe-main">Servings:</span>
          {food.servings}
        </p>

        <div>
          <span className="recipe-main">Ingredients:</span>
          {food.extendedIngredients.map(item => {
            return <li>{item.name}</li>;
          })}
        </div>

        <p>
          <span className="recipe-main">Instructions:</span>
          {food.instructions}
        </p>

        <p>
          By <a href={food.sourceUrl}>{food.creditsText}</a>
        </p>
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
