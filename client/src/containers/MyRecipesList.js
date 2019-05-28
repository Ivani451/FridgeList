import React, { Component } from "react";
import { connect } from "react-redux";
import MyRecipe from "./MyRecipe";

class MyRecipesList extends Component {
  render() {
    return (
      <div>
        <MyRecipe recipes={this.props.recipes} />
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(
  mapStateToProps,
  null
)(MyRecipesList);

/*
Need to connect component to actions/state via react-redux
*/
