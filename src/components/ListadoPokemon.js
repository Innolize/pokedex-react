import React from 'react';
import { Link } from 'react-router-dom';

const CartaPokemon = ({ indicePokemon, pokemon }) => {

  const numeroTresCifras = (numero) => {
    let numeroConvertido = ("000" + numero).slice(-3)
    return numeroConvertido
  }

  return (
    <>
      <div style={{ backgroundColor: "gray", height: "160px", width: "160px", borderStyle: "solid", borderWidth: "1px", borderColor: "white" }}>
        <Link to={`/pokemon/${pokemon}`}>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroTresCifras(indicePokemon)}.png`} style={{ height: "120px" }} alt={pokemon}></img>

          {pokemon}
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
    <div className="d-flex">
      {listaPokemones != null &&
        listaPokemones.map((pokemon, indice) =>
          <CartaPokemon indicePokemon={Number(obtenerIDdeURL(pokemon.url))} pokemon={pokemon.name} key={indice}></CartaPokemon>
        )}


    </div>
  );
}

export default ListadoPokemon;