import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInfo } from "../actions";

class FoodList extends Component {
  //******************************************* Update code below for fetchRecipe

  //should possibly use an onClick event with a rendered button that takes the food.id and
  // dispatches an action with the recipe.id
  renderFood(food) {
    console.log(food);
    return (
      <div>
        {food.map(function(recipe) {
          return (
            <ul key={recipe.id}>
              {recipe.title} <br />
              <img src={recipe.image} alt="" />
              {this.props.fetchInfo(recipe.id)}
            </ul>
          );
        })}
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

function mapStateToProps({ food, info }) {
  return {
    food,
    info
  };
}

export default connect(
  mapStateToProps,
  { fetchInfo }
)(FoodList);
