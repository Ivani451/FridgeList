import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../App";
import Landing from "../Landing";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEngtries={["/"]}>
      <App />
    </MemoryRouter>
  );
});

it("renders Header without crashing", () => {
  expect(wrapped.find(Landing).length).toEqual(1);
});
