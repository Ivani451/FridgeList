import React, { Component } from "react";
import SearchBar from "containers/SearchBar";
import FoodList from "containers/FoodList";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <SearchBar />
        <FoodList />
      </div>
    );
  }
}

export default Home;
