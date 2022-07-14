import axios from "axios";

export const getPokemons = async (numeroPokemons, offset = 0) => {
  const response = (
    await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${numeroPokemons}&offset=${offset}`
    )
  ).data.results;
  return response;
};
