import { useQuery } from "react-query";
import { getPokemons } from "../api/getPokemons";

export const useGetPokemons = (TOTAL_POKEMONES) => {
  return useQuery(["total-pokemons"], () => getPokemons(TOTAL_POKEMONES));
};
