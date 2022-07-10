import React from "react";
import { useFetchReducer } from "../../customHooks/useFetch";
import { fetchArrayTipos } from "../../utilidades";
import { Spinner } from "react-bootstrap";
import styled from "@emotion/styled";

const ImagenTipo = styled.img`
  height: 50px;
`;

const ContenedorTipos = styled.div`
  display: flex;
  justify-content: center;
`;

const TiposTraducidos = ({ tipos }) => {
  const { data, loading, error } = useFetchReducer(fetchArrayTipos, tipos);

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  if (error) return <div>error</div>;
  if (data) console.log(data);
  return (
    <ContenedorTipos>
      {data.map((x, i) => (
        <ImagenTipo
          key={i}
          src={`/tipo-iconos/${x.toLowerCase()}.png`}
        ></ImagenTipo>
      ))}
    </ContenedorTipos>
  );
};

export default TiposTraducidos;
