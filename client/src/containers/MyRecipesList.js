import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMyRecipes } from "../actions";
import MyRecipe from "./MyRecipe";

class MyRecipesList extends Component {
  componentDidMount() {
    this.props.fetchMyRecipes();
  }

  render() {
    return (
      <div>
        <MyRecipe recipes={this.props.recipes} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMyRecipes }, dispatch);
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRecipesList);

/*
Need to connect component to actions/state via react-redux
*/
