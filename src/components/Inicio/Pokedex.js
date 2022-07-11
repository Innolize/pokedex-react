import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { getPokemons } from "../../api/getPokemons";
import SpinnerPersonalizado from "../common/SpinnerPersonalizado";
import BuscadorPokemon from "./BuscadorPokemon";
import ListadoPokemon from "./ListadoPokemon";
import Paginador from "./Paginador";

const Pokedex = () => {
  const POKEMONES_POR_PAGINA = 20;
  const TOTAL_POKEMONES = "807";
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [matchPokemones, setMatchPokemones] = useState([]);
  const {
    isSuccess,
    data: pokemones,
    isLoading
  } = useQuery(["total-pokemons"], () => getPokemons(TOTAL_POKEMONES));

  const [offset, setOffset] = useState(0);

  const { data: pokemonesPaginacion } = useQuery(
    [`${offset}-${offset + POKEMONES_POR_PAGINA}`],
    () => getPokemons(POKEMONES_POR_PAGINA, offset)
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
        setMatchPokemones(pokemonesPaginacion);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [valorBusqueda, buscarPokemons, pokemonesPaginacion]);

  const botonAnteriorOnClick = () => {
    offset !== 0 && setOffset(offset - POKEMONES_POR_PAGINA);
  };

  const botonSiguienteOnClick = () => {
    offset < 807 && setOffset(offset + POKEMONES_POR_PAGINA);
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
            totalPokemones={TOTAL_POKEMONES}
            pokemonesPorPagina={POKEMONES_POR_PAGINA}
            offset={offset}
            itemOnClick={setOffset}
          />
        )}
      </>
    );
  }
  return null;
};

export default Pokedex;
