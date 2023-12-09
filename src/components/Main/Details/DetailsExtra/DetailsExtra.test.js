import React from "react";
import { shallow } from "enzyme";
import DetailsExtra from "./DetailsExtra";

describe("DetailsExtra", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailsExtra />);
    expect(wrapper).toMatchSnapshot();
  });
});
