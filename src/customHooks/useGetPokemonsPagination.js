import { useQuery } from "react-query";
import { getPokemons } from "../api/getPokemons";

export const useGetPokemonsPagination = (POKEMONES_POR_PAGINA, offset) => {
  return useQuery([`${offset}-${offset + POKEMONES_POR_PAGINA}`], () =>
    getPokemons(POKEMONES_POR_PAGINA, offset)
  );
};
