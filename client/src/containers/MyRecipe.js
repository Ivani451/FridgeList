import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMyRecipeInfo, deleteRecipe } from "../actions";
import { bindActionCreators } from "redux";

class MyRecipe extends Component {
  renderRecipes() {
    return this.props.recipes.map(recipes => {
      /*
        When pressed, the delete button will ask the user to confirm their decision. 
        If deletion is accepted, the recipe will be deleted from the users homepage and the page will reload to show
        the updated recipe list.
      */
      return (
        <div id="my-recipe-box">
          <button
            className="delete-button"
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                this.props.deleteRecipe(recipes.id);
                window.location.reload();
              }
            }}
          >
            x
          </button>

          <Link
            to={"/my-recipe/" + recipes.id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div
              id="my-recipe"
              onClick={() => this.props.fetchMyRecipeInfo(recipes.id)}
            >
              <h3>{recipes.title}</h3>
              <p>{recipes.author}</p>
              <hr />
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    return <div id="all-my-recipes">{this.renderRecipes()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMyRecipeInfo, deleteRecipe }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(MyRecipe);

/*
Need to connect component to actions via react-redux
*/
