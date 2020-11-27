import { mount } from "enzyme";
import TypeChip from "../../../components/pokemon/type-chip";

import "jest-styled-components";

describe("Type Chip", () => {
  it("mount ok", () => {
    const wrapper = mount(<TypeChip name="grass" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Shown in purple for poison type", () => {
    const wrapper = mount(<TypeChip name="poison" />);
    expect(wrapper).toHaveStyleRule("background-color", "purple");
  });

  it("Shown in green for grass type", () => {
    const wrapper = mount(<TypeChip name="grass" />);
    expect(wrapper).toHaveStyleRule("background-color", "green");
  });

  it("Shown in yellow for electric type", () => {
    const wrapper = mount(<TypeChip name="electric" />);
    expect(wrapper).toHaveStyleRule("background-color", "yellow");
  });
});
