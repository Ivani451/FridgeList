import React, { Component } from "react";
import SearchBar from "containers/SearchBar";
import FoodList from "containers/FoodList";
import MyRecipes from "containers/MyRecipes";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <SearchBar />
        <FoodList />
        <MyRecipes />
      </div>
    );
  }
}

export default Home;
