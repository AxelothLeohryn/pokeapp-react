import React from "react";
import { shallow } from "enzyme";
import SearchComponent from "./SearchComponent";

describe("SearchComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
