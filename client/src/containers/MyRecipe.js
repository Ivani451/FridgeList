import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMyRecipeInfo } from "../actions";
import { bindActionCreators } from "redux";

class MyRecipe extends Component {
  renderRecipes() {
    return this.props.recipes.map(recipes => {
      return (
        <Link to={"/recipe/" + recipes.id}>
          <div>
            <div onClick={() => this.props.fetchMyRecipeInfo(recipes.id)}>
              <h3>{recipes.title}</h3>
              <p>{recipes.author}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return <div id="my-recipe">{this.renderRecipes()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMyRecipeInfo }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(MyRecipe);

/*
Need to connect component to actions via react-redux
*/
