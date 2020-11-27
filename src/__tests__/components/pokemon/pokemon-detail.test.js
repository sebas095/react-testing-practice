import { render, shallow } from "enzyme";

import Loader from "../../../components/common/loader.jsx";
import PokemonDetail from "../../../components/pokemon/pokemon-detail";
import {
  PokemonName,
  PokemonImage,
} from "../../../components/pokemon/pokemon-styled";

const props = {
  loading: true,
  pokemon: {
    id: 1,
    name: "Bulbasur",
    types: [{ type: { name: "Grass" } }],
  },
  image: "someURL",
};

describe("Pokemon Detail", () => {
  it("Render ok", () => {
    const wrapper = render(<PokemonDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Show the loading bar", () => {
    const wrapper = shallow(<PokemonDetail {...props} />);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it("Show the pokemon info", () => {
    const mockProps = {
      ...props,
      loading: false,
    };

    const wrapper = shallow(<PokemonDetail {...mockProps} />);
    expect(wrapper.find(PokemonImage)).toHaveLength(1);
    expect(wrapper.find(PokemonName)).toHaveLength(1);
  });
});
