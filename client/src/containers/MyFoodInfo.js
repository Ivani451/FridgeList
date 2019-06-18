import React, { Component } from "react";
import { connect } from "react-redux";

class MyFoodInfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.recipes.title}</h1>
      </div>
    );
  }
}
function mapStateToProps({ recipes }) {
  return {
    recipes
  };
}

export default connect(
  mapStateToProps,
  null
)(MyFoodInfo);
