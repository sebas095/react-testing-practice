import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonDetail from "../components/pokemon/pokemon-detail";

import { getPokemonImage } from "../utils/pokemon-utils";
import ApiService from "../services/api.service";

const PokemonInfo = () => {
  const { id } = useParams();
  // TODO: validar que sea un numero correcto (intervalo de pokemons)

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const pokemonId = Number(id);
  const pokemonImage = getPokemonImage(id);

  const fetchPokemon = async () => {
    const data = await ApiService.getPokemon(pokemonId);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <PokemonDetail loading={loading} pokemon={pokemon} image={pokemonImage} />
  );
};

export default PokemonInfo;
