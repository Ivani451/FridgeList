import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";
import SearchBar from "containers/SearchBar";
import FoodList from "containers/FoodList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Home />);
});

it("renders SearchBar without crashing", () => {
  expect(wrapped.find(SearchBar).length).toEqual(1);
});

it("renders FoodList without crashing", () => {
  expect(wrapped.find(FoodList).length).toEqual(1);
});
