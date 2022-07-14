import React from "react";
import styled from "@emotion/styled";

const ContenedorError = styled.div``;

export const APIError = () => {
  const mensajeError = "Ha habido un error, prueba recargando la página.";
  return <ContenedorError>{mensajeError}</ContenedorError>;
};
