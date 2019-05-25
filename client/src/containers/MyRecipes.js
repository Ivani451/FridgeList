import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyRecipes, deleteRecipe } from "../actions";

class MyRecipes extends Component {
  componentDidMount() {
    this.props.fetchMyRecipes();
  }

  renderRecipes() {
    return this.props.recipes.map(recipes => {
      return (
        <div>
          <div id="myRecipe">
            <h3>{recipes.title}</h3>
            <p>{recipes.servings}</p>
            <p>{recipes.ingredients}</p>
            <p>{recipes.instructions}</p>
            <p>{recipes.author}</p>
            <p>{recipes.prep}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderRecipes()}</div>;
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(
  mapStateToProps,
  { fetchMyRecipes, deleteRecipe }
)(MyRecipes);

/*
Need to connect component to actions/state via react-redux
*/
