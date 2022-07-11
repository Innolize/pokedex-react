import React from "react";
import styled from "@emotion/styled";

const ContenedorPesoAltura = styled.div``;

const Lista = styled.ul``;
const Linea = styled.p``;

export const PesoAltura = ({ peso, altura }) => {
  const alturaFinal = `${altura / 10} m`;
  const pesoFinal = `${peso} Kg`;

  return (
    <ContenedorPesoAltura>
      <Lista>
        <Linea>
          <strong>Peso</strong>:{pesoFinal}
        </Linea>
        <Linea>
          <strong>Altura</strong>: {alturaFinal}
        </Linea>
      </Lista>
    </ContenedorPesoAltura>
  );
};
