import React, { useState, useEffect, useCallback } from "react";
import { useGetPokemons } from "../../customHooks/useGetPokemons";
import { useGetPokemonsPagination } from "../../customHooks/useGetPokemonsPagination";
import SpinnerPersonalizado from "../common/SpinnerPersonalizado";
import { BuscadorPokemon } from "./BuscadorPokemon";
import { ListadoPokemon } from "./ListadoPokemon";
import { Paginador } from "./Paginador";

const POKEMONES_POR_PAGINA = 20;
const TOTAL_POKEMONES = 807;

export const Pokedex = ({
  pokemonesPorPagina = POKEMONES_POR_PAGINA,
  totalPokemones = TOTAL_POKEMONES,
}) => {
  const [offset, setOffset] = useState(0);
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [matchPokemones, setMatchPokemones] = useState([]);
  const {
    isSuccess,
    data: pokemones,
    isLoading,
  } = useGetPokemons(totalPokemones);
  const { data: pokemonesPaginacion } = useGetPokemonsPagination(
    pokemonesPorPagina,
    offset
  );

  const buscarPokemons = useCallback(() => {
    const pokemonesEncontrados = pokemones.filter(
      (pokemon) =>
        pokemon.name.indexOf(valorBusqueda.toLowerCase()) > -1 &&
        valorBusqueda !== ""
    );
    setMatchPokemones(pokemonesEncontrados);
  }, [pokemones, valorBusqueda]);

  //busca pokemones segun el valor de busqueda, con timeout
  //de medio segundo para no renderizar mientras se escribe

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (valorBusqueda !== "") {
        buscarPokemons();
      } else {
        console.log(pokemonesPaginacion)
        setMatchPokemones(pokemonesPaginacion);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [valorBusqueda, buscarPokemons, pokemonesPaginacion]);

  const botonAnteriorOnClick = () => {
    offset !== 0 && setOffset(offset - pokemonesPorPagina);
  };

  const botonSiguienteOnClick = () => {
    offset < 807 && setOffset(offset + pokemonesPorPagina);
  };

  if (isLoading) {
    return <SpinnerPersonalizado></SpinnerPersonalizado>;
  }

  if (isSuccess) {
    return (
      <>
        <BuscadorPokemon
          value={valorBusqueda}
          onChangeBusqueda={(e) => setValorBusqueda(e.target.value)}
        />

        <ListadoPokemon listaPokemones={matchPokemones} />
        {valorBusqueda === "" && (
          <Paginador
            botonAnterior={botonAnteriorOnClick}
            botonSiguiente={botonSiguienteOnClick}
            totalPokemones={totalPokemones}
            pokemonesPorPagina={pokemonesPorPagina}
            offset={offset}
            itemOnClick={setOffset}
          />
        )}
      </>
    );
  }
};
