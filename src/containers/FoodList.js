import React, { Component } from "react";
import { connect } from "react-redux";

class FoodList extends Component {
  renderFood(food) {
    console.log(food);
    return (
      <div>
        {food.map(function(recipe) {
          return (
            <ul key={recipe.id}>
              {recipe.title}
              <img src={recipe.image} alt="" />
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

function mapStateToProps({ food }) {
  return { food };
}

export default connect(
  mapStateToProps,
  null
)(FoodList);
