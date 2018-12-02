import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";
import SearchBar from "containers/SearchBar";
import FoodList from "containers/FoodList";

it("renders SearchBar without crashing", () => {
  const wrapped = shallow(<Home />);

  expect(wrapped.find(SearchBar).length).toEqual(1);
});

it("renders FoodList without crashing", () => {
  const wrapped = shallow(<Home />);

  expect(wrapped.find(FoodList).length).toEqual(1);
});
