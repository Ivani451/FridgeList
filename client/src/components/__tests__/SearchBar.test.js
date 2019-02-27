import React from "react";
import { mount } from "enzyme";
import SearchBar from "containers/SearchBar";

let wrapped;

beforeEach(() => {
  wrapped = mount(<SearchBar />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a div and a button", () => {
  expect(wrapped.find("div").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
