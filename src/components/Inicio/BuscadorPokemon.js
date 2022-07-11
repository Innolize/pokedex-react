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

const BuscadorPokemon = ({ value, onChangeBusqueda }) => {
  return (
    <ContenedorBuscadorPokemon>
      <ImagenLogoPokemon
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemon-logo"
      />
      <InputBusquedaPokemon
        type="text"
        value={value}
        onChange={onChangeBusqueda}
      ></InputBusquedaPokemon>
    </ContenedorBuscadorPokemon>
  );
};

export default BuscadorPokemon;
