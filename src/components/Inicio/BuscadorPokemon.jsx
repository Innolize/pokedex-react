import styled from "@emotion/styled";
import React from "react";

const ImagenLogoPokemon = styled.img`
  height: 120px;
`;

const InputBusquedaPokemon = styled.input`
  width: 400px;
`;

const ContenedorBuscadorPokemon = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const BuscadorPokemon = ({ value, onChangeBusqueda }) => {
  return (
    <ContenedorBuscadorPokemon>
      <ImagenLogoPokemon src="./pokemon-logo/pokelogo.png" alt="pokemon-logo" />
      <InputBusquedaPokemon
        type="text"
        value={value}
        onChange={onChangeBusqueda}
        placeholder="Busca un pokémon!"
      ></InputBusquedaPokemon>
    </ContenedorBuscadorPokemon>
  );
};
