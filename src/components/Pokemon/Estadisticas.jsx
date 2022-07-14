import styled from "@emotion/styled";
import React from "react";

const estadistica = [
  "PS",
  "Ataque",
  "Defensa",
  "Ataque Especial",
  "Defensa Especial",
  "Velocidad",
];

const ContenedorEstadisticas = styled.div``;

const Lista = styled.ul``;
const Linea = styled.p``;

export const Estadisticas = ({ stats }) => {
  return (
    <ContenedorEstadisticas>
      {estadistica.map((stat, i) => (
        <Lista key={i}>
          <Linea>
            <strong>{estadistica[i]}</strong>:{stats[i].base_stat}
          </Linea>
        </Lista>
      ))}
    </ContenedorEstadisticas>
  );
};
