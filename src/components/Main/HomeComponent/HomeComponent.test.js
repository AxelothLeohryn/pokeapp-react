import React from "react";
import { shallow } from "enzyme";
import HomeComponent from "./HomeComponent";

describe("HomeComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HomeComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
