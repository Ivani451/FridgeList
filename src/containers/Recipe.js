import React, { Component } from "react";

export default class Recipe extends Component {
  renderFood(food) {
    return (
      <div className="food-container">
        {food.map(function(recipe) {
          console.log(recipe.id);
          return (
            <div className="recipeComp">
              {recipe.title} <br />
              <img src={recipe.image} alt="" />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.foods.map(this.renderFood)}</h1>
      </div>
    );
  }
}
