import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyRecipes, deleteRecipe } from "../actions";
import { bindActionCreators } from "redux";

class MyRecipesList extends Component {
  componentDidMount() {
    this.props.fetchMyRecipes();
  }

  renderRecipes() {
    return this.props.recipes.map(recipes => {
      return (
        <div>
          <div>
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
    return <div id="myRecipe">{this.renderRecipes()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMyRecipes }, dispatch);
}

export default connect(
  null,
  { fetchMyRecipes, deleteRecipe }
)(MyRecipesList);

/*
Need to connect component to actions via react-redux
*/
