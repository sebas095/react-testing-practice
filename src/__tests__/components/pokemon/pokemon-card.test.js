import { shallow } from "enzyme";

import PokemonCard from "../../../components/pokemon/pokemon-card";
import {
  PokemonName,
  PokemonImage,
} from "../../../components/pokemon/pokemon-styled";

import { sanitizePokemonId } from "../../../utils/pokemon-utils";

const name = "Bulbasaur";
const url = "https://pokeapi.co/api/v2/pokemon/1";

let pokemonId = Number(url.split("/")[6]);
pokemonId = sanitizePokemonId(pokemonId);

describe("Pokemon Card", () => {
  it("Render ok", () => {
    const wrapper = shallow(<PokemonCard name={name} pokemonId={pokemonId} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Show Pokemon Name component", () => {
    const wrapper = shallow(<PokemonCard name={name} pokemonId={pokemonId} />);
    expect(wrapper.find(PokemonName)).toHaveLength(1);
    expect(wrapper.find(PokemonName).text()).toEqual(`${pokemonId}: ${name}`);
  });

  it("Show Pokemon Image component", () => {
    const wrapper = shallow(<PokemonCard name={name} pokemonId={pokemonId} />);
    expect(wrapper.find(PokemonImage)).toHaveLength(1);
  });
});
