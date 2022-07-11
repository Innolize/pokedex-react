import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { numeroTresCifras } from "../../utils/numeroTresCifras";
import { primerLetraMayus } from "../../utils/primerLetraMayus";
import { obtenerIDdeURL } from "../../utils/obtenerIDdeURL";

const ContenedorListado = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 320px;
`;

const ContenedorCartaPokemon = styled.div`
  margin: 2.5px;
  background-color: gray;
  height: 160px;
  width: 160px;
  border: 1px solid white;
`;

const NombrePokemon = styled.p`
  font-weight: bold;
`;

const ImagenPokemon = styled.img`
  height: 120px;
`;

const CartaPokemon = ({ indicePokemon, pokemon }) => {
  const pokemonFormateado = primerLetraMayus(pokemon);
  const indicePokemonFormateado = numeroTresCifras(indicePokemon);
  return (
    <ContenedorCartaPokemon>
      <Link style={{ color: "black" }} to={`/pokemon/${pokemon}`}>
        <ImagenPokemon
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indicePokemonFormateado}.png`}
          alt={pokemon}
        ></ImagenPokemon>
        <NombrePokemon>
          {`#${indicePokemon} ${pokemonFormateado}`}
        </NombrePokemon>
      </Link>
    </ContenedorCartaPokemon>
  );
};

const ListadoPokemon = ({ listaPokemones }) => {
  return (
    <ContenedorListado>
      {listaPokemones != null &&
        listaPokemones.map((pokemon, indice) => (
          <CartaPokemon
            indicePokemon={obtenerIDdeURL(pokemon.url)}
            pokemon={pokemon.name}
            key={indice}
          ></CartaPokemon>
        ))}
    </ContenedorListado>
  );
};

export default ListadoPokemon;
