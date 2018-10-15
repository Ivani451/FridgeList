import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import FoodList from "../containers/FoodList";
import "../App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <FoodList />
      </div>
    );
  }
}

export default App;
