import React, { Component } from "react";
import { connect } from "react-redux";

// the recipe is passed down to the props from our database as an object
class MyFoodInfo extends Component {
  render() {
    let recipe = this.props.recipes;
    console.log(recipe);

    // the data is taken from our recipes reducer and displayed to the user

    return (
      <div id="my-food-info">
        <h1 id="food-title">{recipe.title}</h1>

        <p>
          <span>Prep-time: </span>
          {recipe.prep} minutes
        </p>

        <p>
          <span>Servings: </span>
          {recipe.servings}
        </p>

        <div>
          <span>Ingredients: </span>
          {recipe.ingredients}
        </div>

        <p>
          <span>Instructions: </span>
          {recipe.instructions}
        </p>

        <p>
          By <a href={recipe.source}>{recipe.author}</a>
        </p>
      </div>
    );
  }
}
function mapStateToProps({ recipes }) {
  return {
    recipes
  };
}

export default connect(
  mapStateToProps,
  null
)(MyFoodInfo);
