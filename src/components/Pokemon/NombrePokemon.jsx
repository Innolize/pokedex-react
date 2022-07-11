import styled from "@emotion/styled";
import React from "react";
import { primerLetraMayus } from "../../utils/primerLetraMayus";

const ContenedorNombre = styled.div`
  text-align: center;
  margin: 1em;
`;

const Titulo = styled.h3``;

function NombrePokemon({ nombre, id }) {
  return (
    <ContenedorNombre>
      <Titulo>
        Nº{id} {primerLetraMayus(nombre)}
      </Titulo>
    </ContenedorNombre>
  );
}

export default NombrePokemon;
