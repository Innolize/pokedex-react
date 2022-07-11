import React from "react";
import styled from "@emotion/styled";

const ImagenTipo = styled.img`
  height: 50px;
`;

const ContenedorTipos = styled.div`
  display: flex;
  justify-content: center;
`;

const TiposTraducidos = ({ tipos }) => {
  return (
    <ContenedorTipos>
      {tipos.map((x, i) => (
        <ImagenTipo
          key={i}
          src={`/tipo-iconos/${x.toLowerCase()}.png`}
          alt={x}
          title={x}
        ></ImagenTipo>
      ))}
    </ContenedorTipos>
  );
};

export default TiposTraducidos;
