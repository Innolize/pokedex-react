import React from 'react';
import { Link } from 'react-router-dom';

const CartaPokemon = () => {
  return (
    <>
      <div style={{ backgroundColor: "gray", height: "160px", width: "160px", borderStyle: "solid", borderWidth: "1px", borderColor: "white" }}>
        <Link to="/pokemon/:id">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/872.png" style={{ height: "120px" }} alt="pokemon"></img>

          Snom
        </Link>
      </div>
    </>
  )
}



const ListadoPokemon = () => {
  return (
    <div className="d-flex">
      <CartaPokemon></CartaPokemon>
      <CartaPokemon></CartaPokemon>
      <CartaPokemon></CartaPokemon>
    </div>
  );
}

export default ListadoPokemon;