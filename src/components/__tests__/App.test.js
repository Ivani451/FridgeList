import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";
import SearchBar from "../../containers/SearchBar";

it("renders SearchBar without crashing", () => {
  const wrapped = shallow(<Home />);

  expect(wrapped.find(SearchBar).length).toEqual(1);
});
