import React, { Component } from "react";
import { connect } from "react-redux";

class FoodInfo extends Component {
  renderInfo(food) {
    return <div>{food}</div>;
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

export default connect(
  mapStateToProps,
  null
)(FoodInfo);
