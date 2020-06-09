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

const CartaPokemon = ({ indicePokemon, pokemon }) => {

  const numeroTresCifras = (numero) => {
    let numeroConvertido = ("000" + numero).slice(-3)
    return numeroConvertido
  }

  return (
    <>
      <div style={{ marginTop: "5px", backgroundColor: "gray", height: "160px", width: "160px", borderStyle: "solid", borderWidth: "1px", borderColor: "white" }}>
        <Link style={{ color: "black" }} to={`/pokemon/${pokemon}`}>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroTresCifras(indicePokemon)}.png`} style={{ height: "120px" }} alt={pokemon}></img>

          <p><strong>#{indicePokemon} {pokemon}</strong></p>
        </Link>
      </div>
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