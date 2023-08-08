import React from "react";
import { shallow } from "enzyme";
import Upload from "./Upload";

describe("Upload", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Upload />);
    expect(wrapper).toMatchSnapshot();
  });
});
