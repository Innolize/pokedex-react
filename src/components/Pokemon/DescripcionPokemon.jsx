import styled from "@emotion/styled";
import React from "react";

const ContenedorDescripcionPokemon = styled.div``;
const Descripcion = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

export const DescripcionPokemon = ({ descripcion }) => {
  return (
    <ContenedorDescripcionPokemon>
      <Descripcion>{descripcion}</Descripcion>
    </ContenedorDescripcionPokemon>
  );
};

export default DescripcionPokemon;
