import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useFetchReducer } from '../../customHooks/useFetch'
import { buscarPokemon } from '../../utilidades';
import DescripcionPokemon from './DescripcionPokemon';
import TiposTraducidos from './tipos';

const Pokemon = ({ pokemon, id }) => {
  const { pokemonSeleccionado } = useParams()
  const { data, loading, error } = useFetchReducer(buscarPokemon, pokemonSeleccionado)

  const numeroTresCifras = (numero) => {
    let numeroConvertido = ("000" + numero).slice(-3)
    return numeroConvertido
  }
  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  if (error)
    return (<div>error</div>)

  if (data)
    console.log(data)
  return (

    <Container style={{ width: "80%", }}>
      <h1>{data.name}</h1>
      <Row style={{ width: "100%" }}>
        <Col>
          <img style={{ width: "100%" }} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroTresCifras(data.id)}.png`} alt={pokemon}></img>
        </Col>
        <Col style={{ backgroundColor: "white", color: "black", textAlign: "left" }}>
          <div style={{ margin: "1em" }}>
            <h3>Nº{data.id} {data.name}</h3>
          </div>
          <TiposTraducidos tipos={data.types}></TiposTraducidos>
          <DescripcionPokemon id={data.id}></DescripcionPokemon>


        </Col>
      </Row>
    </Container >
  );
}






export default Pokemon;