import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import FoodList from "../containers/FoodList";
import "../App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <header id="main-header">
          <h1>ReciFridge</h1>
        </header>
        <SearchBar />
        <main>
          <FoodList />
        </main>
      </div>
    );
  }
}

export default App;
