import React from "react";
import { shallow } from "enzyme";
import GenreTag from "./TypeTag";

describe("GenreTag", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GenreTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
