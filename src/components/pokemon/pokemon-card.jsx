import React from "react";

import {
  PokemonCardContainer,
  PokemonImage,
  PokemonName,
} from "./pokemon-styled";

import { getPokemonImage } from "../../utils/pokemon-utils";

const PokemonCard = ({ name, pokemonId }) => (
  <PokemonCardContainer>
    <PokemonImage src={getPokemonImage(pokemonId)} />
    <PokemonName>
      {pokemonId}: {name}
    </PokemonName>
  </PokemonCardContainer>
);

export default PokemonCard;
