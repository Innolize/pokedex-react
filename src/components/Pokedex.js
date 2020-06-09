import React, { useState, useEffect } from 'react';
import BuscadorPokemon from './BuscadorPokemon';
import ListadoPokemon from './ListadoPokemon';
import Paginador from './Paginador';

const Pokedex = () => {

    const [valorBusqueda, setValorBusqueda] = useState("")
    const [pokemones, setPokemones] = useState([])
    const [matchPokemones, setMatchPokemones] = useState([])
    const POKEMONES_POR_PAGINA = 20
    const TOTAL_POKEMONES = "807"
    const [offset, setOffset] = useState(0)
    const [pokemonesPokedex, setPokemonesPokedex] = useState([])

    useEffect(() => {
        const fetchPokemons = async () => {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONES}&offset=0`)
            const rJSON = await respuesta.json()
            setPokemones(rJSON.results)
        }
        fetchPokemons()
    }, [])

    useEffect(() => {
        if (valorBusqueda !== "") {
            const buscarPokemones = () => {
                let pokemonesEncontrados = pokemones.filter(pokemon => pokemon.name.indexOf(valorBusqueda.toLowerCase()) > -1 && valorBusqueda !== "")
                return pokemonesEncontrados
            }
            let test = buscarPokemones()
            setMatchPokemones(test)
        }
        else {
            setMatchPokemones(pokemonesPokedex.results)
        }
    }, [valorBusqueda, pokemones, pokemonesPokedex])

    useEffect(() => {
        const fetchPokemonsPokedex = async () => {
            console.log(offset)

            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONES_POR_PAGINA}&offset=${offset}`)
            const r = await respuesta.json()
            console.log(r.results)
            setPokemonesPokedex(r)
        }
        fetchPokemonsPokedex()
    }, [offset])

    return (
        <>
            <BuscadorPokemon
                onClick={() => { console.log(pokemones[411]) }}
                value={valorBusqueda}
                onChangeBusqueda={(e) => { setValorBusqueda(e.target.value) }}
            />

            <ListadoPokemon listaPokemones={matchPokemones}
            />
            {valorBusqueda === "" &&
                <Paginador
                    botonAnterior={() => { offset !== 0 && setOffset(offset - POKEMONES_POR_PAGINA) }}
                    botonSiguiente={() => { offset < 807 && setOffset(offset + POKEMONES_POR_PAGINA) }}
                    totalPokemones={TOTAL_POKEMONES}
                    pokemonesPorPagina={POKEMONES_POR_PAGINA}
                    offset={offset}
                    itemOnClick={setOffset}

                />
            }

        </>
    )
}

export default Pokedex