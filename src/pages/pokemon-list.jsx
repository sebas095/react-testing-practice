import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/button";
import Loader from "../components/common/loader";
import PokemonCard from "../components/pokemon/pokemon-card";

import ApiService from "../services/api.service";

import { sanitizePokemonId } from "../utils/pokemon-utils";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const updatePokemonSID = ({ name, url }) => {
    let pokemonId = Number(url.split("/")[6]);
    pokemonId = sanitizePokemonId(pokemonId);

    return {
      name,
      url,
      sanitizedId: pokemonId,
    };
  };

  const fetchPokemons = async () => {
    const pokemons = await ApiService.listPokemons();
    setPokemonList(pokemons.map(updatePokemonSID));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const renderPokemons = () =>
    pokemonList.map(({ url, name, sanitizedId }) => (
      <Link to={`/pokemon/${sanitizedId}`}>
        <PokemonCard key={url} name={name} pokemonId={sanitizedId} />
      </Link>
    ));

  return (
    <div>
      <div className="cards-container">
        {loading && <Loader />}
        {!loading && pokemonList.length > 0 && renderPokemons()}
      </div>

      <div className="button-group">
        <Button label="Anteriores" onClick={() => {}} />
        <Button label="Siguientes" onClick={() => {}} />
      </div>
    </div>
  );
};

export default PokemonList;
