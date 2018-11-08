import React, { Component } from "react";
import Home from "./Home";
import "../App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <header id="main-header">
          <h1>ReciFridge</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
