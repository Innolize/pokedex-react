import React from "react";
import styled from "@emotion/styled";

const ContenedorHabilidadPokemon = styled.div``;

const Lista = styled.ul``;
const Linea = styled.p``;

export const HabilidadPokemon = ({ habilidades }) => {
  return (
    <ContenedorHabilidadPokemon>
      <Lista>
        <Linea>
          <strong>Habilidades:</strong>
        </Linea>
        {habilidades.map((x, i) => (
          <Linea key={i}>{x}</Linea>
        ))}
      </Lista>
    </ContenedorHabilidadPokemon>
  );
};
