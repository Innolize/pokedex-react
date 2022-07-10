import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button, Pagination } from "react-bootstrap";

const ContenedorDeItems = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
`;

const Paginador = ({
  botonAnterior,
  botonSiguiente,
  totalPokemones,
  pokemonesPorPagina,
  itemOnClick,
  offset,
}) => {
  const totalPaginas = Math.ceil(totalPokemones / pokemonesPorPagina);
  const [paginaActual, SetPaginaActual] = useState(1);

  let items = [];

  const manejadorItemOnclick = (number) => {
    itemOnClick(pokemonesPorPagina * (number - 1));
    SetPaginaActual(number);
  };

  for (let number = 1; number <= totalPaginas; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === paginaActual}
        onClick={() => manejadorItemOnclick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const botonAnteriorOnClick = () => {
    if (paginaActual !== 1) {
      botonAnterior();
      SetPaginaActual(paginaActual - 1);
    }
  };

  const botonSiguienteOnClick = () => {
    if (paginaActual !== totalPaginas) {
      botonSiguiente();
      SetPaginaActual(paginaActual + 1);
    }
  };

  return (
    <ContenedorDeItems>
      <Button onClick={botonAnteriorOnClick}>Anterior</Button>
      {items}
      <Button onClick={botonSiguienteOnClick}>Siguiente</Button>
    </ContenedorDeItems>
  );
};

export default Paginador;
