import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyRecipes, deleteRecipe } from "../actions";

class MyRecipes extends Component {
  componentDidMount() {
    this.props.fetchMyRecipes();
  }

  render() {
    return (
      <div>
        <h1>HELLO</h1>
      </div>
    );
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
