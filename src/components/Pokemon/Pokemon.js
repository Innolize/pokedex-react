import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useFetchReducer } from '../../customHooks/useFetch'
import { buscarPokemon } from '../../utilidades';
import DescripcionPokemon from './DescripcionPokemon';
import TiposTraducidos from './tipos';
import Stats from './Stats'
import HabilidadPokemon from './HabilidadPokemon'


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
    debugger
  console.log(data)
  return (

    <Container style={{ width: "80%", }}>
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

          <Row style={{paddingTop: "10px"}}>
            <Col>
              <Stats stats={data.stats}></Stats>
            </Col>
            <Col>
              <div>
                <p><strong>Peso:</strong> {data.weight / 10}Kg</p>
              </div>
              <div><strong>Altura:</strong> {data.height / 10} m</div>
              <div>
                <HabilidadPokemon habilidades={data.abilities}></HabilidadPokemon>
              </div>
            </Col>
          </Row>



        </Col>
      </Row>
    </Container >
  );
}






export default Pokemon;