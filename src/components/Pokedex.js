import React, { useState, useEffect, useCallback } from "react";
import { getPokemons } from "../api/getPokemons";
import BuscadorPokemon from "./BuscadorPokemon";
import ListadoPokemon from "./ListadoPokemon";
import Paginador from "./Paginador";

const Pokedex = () => {
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [pokemones, setPokemones] = useState([]);
  const [matchPokemones, setMatchPokemones] = useState([]);
  const POKEMONES_POR_PAGINA = 20;
  const TOTAL_POKEMONES = "807";
  const [offset, setOffset] = useState(0);
  const [pokemonesPokedex, setPokemonesPokedex] = useState([]);

  // Busca pokemones al montar componente
  useEffect(() => {
    const fetchPokemons = async () => {
      const respuesta = await getPokemons(TOTAL_POKEMONES);
      setPokemones(respuesta);
    };
    fetchPokemons();
  }, []);

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
        setMatchPokemones(pokemonesPokedex);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [valorBusqueda, pokemonesPokedex, buscarPokemons]);

  //busca pokemones dependiendo de paginacion

  useEffect(() => {
    const fetchPokemonsPokedex = async () => {
      const respuesta = await getPokemons(POKEMONES_POR_PAGINA, offset);
      setPokemonesPokedex(respuesta);
    };
    fetchPokemonsPokedex();
  }, [offset]);

  const botonAnteriorOnClick = () => {
    offset !== 0 && setOffset(offset - POKEMONES_POR_PAGINA);
  };

  const botonSiguienteOnClick = () => {
    offset < 807 && setOffset(offset + POKEMONES_POR_PAGINA);
  };
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
};

export default Pokedex;
