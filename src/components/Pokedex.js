import React, { useState, useEffect } from 'react';
import BuscadorPokemon from './BuscadorPokemon';
import ListadoPokemon from './ListadoPokemon';

const Pokedex = () => {

    const [valorBusqueda, setValorBusqueda] = useState("")
    const [pokemones, setPokemones] = useState([])
    const [matchPokemones, setMatchPokemones] = useState([])

    useEffect(() => {
        const fetchPokemons = async () => {
            const TOTAL_POKEMONES = "807"
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONES}&offset=0`)
            const rJSON = await respuesta.json()
            setPokemones(rJSON.results)
        }
        fetchPokemons()
    }, [])

    useEffect(() => {
        debugger
        console.log(pokemones)
        const buscarPokemones = () => {
            let pokemonesEncontrados = pokemones.filter(pokemon => pokemon.name.indexOf(valorBusqueda.toLowerCase()) > -1 && pokemon !== "")
            return pokemonesEncontrados
        }
        let test = buscarPokemones()
        

        setMatchPokemones(test)
    }, [valorBusqueda, pokemones])

    return (
        <>
            <BuscadorPokemon
                onClick={() => { console.log(pokemones[411]) }}
                value={valorBusqueda}
                onChangeBusqueda={(e) => { setValorBusqueda(e.target.value) }}
            />

            <ListadoPokemon listaPokemones={matchPokemones}

            />
        </>
    )
}

export default Pokedex