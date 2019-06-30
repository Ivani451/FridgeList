import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Header from "containers/Header";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("renders MyRecipesList without crashing", () => {
  expect(wrapped.find(Header).length).toEqual(1);
});
