import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { submitRecipe } from "../actions";

/*
***************** hook up submitRecipe action to take all of our values and save
them in the database so that someone elses recipe will show up on our dashboard
as it was our own ***********************
right now, the save button doesn't do anything... so, do tha
*/

class FoodInfo extends Component {
  renderInfo(food) {
    return (
      <div className="food-info">
        <h4>{food.title}</h4>

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

        <button
          onClick={() => {
            if (window.confirm("Are you sure you wish to save this item?")) {
              this.props.submitRecipe(food);
            }
          }}
        >
          save
        </button>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitRecipe }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodInfo);
