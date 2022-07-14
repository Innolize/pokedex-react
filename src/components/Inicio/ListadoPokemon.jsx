import React from "react";
import styled from "@emotion/styled";
import { obtenerIDdeURL } from "../../utils/obtenerIDdeURL";
import { CartaPokemon } from "./CartaPokemon";

const ContenedorListado = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 320px;
`;

export const ListadoPokemon = ({ listaPokemones }) => {
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