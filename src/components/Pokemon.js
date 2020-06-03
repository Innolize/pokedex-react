import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Pokemon = ({ pokemon, id }) => {
  const { pokemonElegido } = useParams()
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(pokemonElegido)

  useEffect(() => {
    const buscarPokemon = async () => {
      const URL_BASE_POKEMON = "https://pokeapi.co/api/v2/pokemon/"
      const datos = await fetch(`${URL_BASE_POKEMON}${pokemonSeleccionado}`)
      return datos.json()
    }
    setPokemonSeleccionado(buscarPokemon())
  }, [pokemonSeleccionado])


  BlogPost()
  function BlogPost() {
    console.log(pokemonSeleccionado)
  }

  const numeroTresCifras = (numero) => {
    let numeroConvertido = ("000" + numero).slice(-3)
    return numeroConvertido
  }

  return (
    <Container style={{ width: "80%" }}>
      <h1>{pokemon.toUpperCase()}</h1>
      <Row style={{ width: "100%" }}>
        <Col>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroTresCifras(id)}.png`} alt={pokemon}></img>
        </Col>
        <Col>1s23</Col>
      </Row>
    </Container>
  );
}

export default Pokemon;