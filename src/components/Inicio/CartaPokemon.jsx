import React from "react";
import { numeroTresCifras } from "../../utils/numeroTresCifras";
import { primerLetraMayus } from "../../utils/primerLetraMayus";
import { Link } from "react-router-dom";

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

export const CartaPokemon = ({ indicePokemon, pokemon }) => {
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
