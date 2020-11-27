import styled from "styled-components";

import {
  PokemonCardContainer,
  PokemonName,
  PokemonImage,
} from "./pokemon-styled";

import TypeChip from "./type-chip";
import Loader from "../common/loader";

const PokemonDetailStyled = styled.div``;

const PokemonDetail = ({ loading, pokemon, image }) => {
  const renderTypes = ({ types }) =>
    types
      ? types.map((pokemonType) => {
          return (
            <TypeChip
              key={pokemonType.type.name}
              name={pokemonType.type.name}
            />
          );
        })
      : null;

  return (
    <PokemonDetailStyled>
      {loading && <Loader />}
      {!loading && pokemon && (
        <PokemonCardContainer>
          <PokemonImage src={image} />
          <PokemonName>
            {pokemon.id}: {pokemon.name}
          </PokemonName>
          {pokemon?.types ? renderTypes({ types: pokemon.types }) : null}
        </PokemonCardContainer>
      )}
    </PokemonDetailStyled>
  );
};

export default PokemonDetail;
