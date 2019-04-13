import React, { Component } from "react";

class Upload extends Component {
  fileSelectedHandler = event => {
    console.log(event.target);
  };

  render() {
    return (
      <div id="upload-button">
        <input type="file" onChange={this.fileSelectedHandler} />
      </div>
    );
  }
}

export default Upload;
