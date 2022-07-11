import { useQuery } from "react-query";
import { obtenerPokemon } from "../api/getPokemon";

export const useGetPokemon = (pokemonSeleccionado) => {
  return useQuery([`pokemon-${pokemonSeleccionado}`], () =>
    obtenerPokemon(pokemonSeleccionado)
  );
};
