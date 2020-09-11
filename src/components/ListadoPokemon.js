import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ContenedorListado = styled.div`
margin-top: 1em;
margin-left: 3em;
display: grid;
grid-row-gap: 3em;
grid-template-columns: repeat(auto-fill, minMax(0,200px));
`

const ContenedorCarta = styled.div`
  margin-top: 5px;
  background-color: gray;
  height: 160px;
  width: 160px;
  border-style: solid;
  border-width: 1px;
  border-color: white; 
`

const ImagenEstilada = styled.img`
  height: 120px;
`

const CartaPokemon = ({ indicePokemon, pokemon }) => {

  const obtenerNumeroPokemon = () => {
    let numeroConvertido = ("000" + indicePokemon).slice(-3)
    return numeroConvertido
  }

  const numero = obtenerNumeroPokemon()
  return (
    <>
      <ContenedorCarta>
        <Link style={{ color: "black" }} to={`/pokemon/${pokemon}`}>
          <ImagenEstilada src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`} alt={pokemon}></ImagenEstilada>

          <p><strong>#{indicePokemon} {pokemon}</strong></p>
        </Link>
      </ContenedorCarta>
    </>
  )
}



const ListadoPokemon = ({ listaPokemones }) => {

  const obtenerIDdeURL = (url) => {
    return url.split("/")[6]
  }

  return (
    <ContenedorListado>
      {listaPokemones != null &&
        listaPokemones.map((pokemon, indice) =>
          <CartaPokemon indicePokemon={Number(obtenerIDdeURL(pokemon.url))} pokemon={pokemon.name} key={indice}></CartaPokemon>
        )}
    </ContenedorListado>
  );
}

export default ListadoPokemon;