const API_URL = "https://pokeapi.co/api/v2/pokemon";

class ApiService {
  static async getPokemon(pokemonId) {
    const res = await fetch(`${API_URL}/${pokemonId}`);
    const data = await res.json();
    return data;
  }

  static async listPokemons() {
    const res = await fetch(API_URL);
    const { results } = await res.json();
    return results;
  }
}

export default ApiService;
