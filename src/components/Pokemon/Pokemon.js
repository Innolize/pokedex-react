import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DescripcionPokemon from "./DescripcionPokemon";
import TiposTraducidos from "./tipos";
import Stats from "./Stats";
import HabilidadPokemon from "./HabilidadPokemon";
import { useQuery } from "react-query";
import { obtenerPokemon } from "../../api/getPokemon";
import { numeroTresCifras } from "../../utils/numeroTresCifras";
import styled from "@emotion/styled";
import NombrePokemon from "./NombrePokemon";
import { PesoAltura } from "./PesoAlturaPokemon";

const PokemonContainer = styled(Container)`
  display: flex;
`;

const ContenedorSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
`;

const StyledSpinner = styled(Spinner)`
  width: 5rem;
  height: 5rem;
`;

const ImagenPokemon = styled.img`
  width: 100%;
`;

const ColumnaIzquierda = styled(Col)``;

const ColumnaDerecha = styled(Col)`
  background-color: gray;
  color: black;
  text-align: left;
`;

const Pokemon = () => {
  const { pokemonSeleccionado } = useParams();
  const { isSuccess, data, isLoading, isError } = useQuery(["pokemon"], () =>
    obtenerPokemon(pokemonSeleccionado)
  );

  if (isLoading) {
    return (
      <ContenedorSpinner>
        <StyledSpinner animation="border" role="status"></StyledSpinner>
      </ContenedorSpinner>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (isSuccess) {
    return (
      <PokemonContainer>
        <ColumnaIzquierda>
          <ImagenPokemon
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroTresCifras(
              data.id
            )}.png`}
            alt={data.nombre}
            title={data.nombre}
          ></ImagenPokemon>
        </ColumnaIzquierda>
        <ColumnaDerecha>
          <NombrePokemon nombre={data.nombre} id={data.id}></NombrePokemon>
          <TiposTraducidos tipos={data.tipos}></TiposTraducidos>
          <DescripcionPokemon
            descripcion={data.descripcion}
          ></DescripcionPokemon>

          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <Stats stats={data.stats}></Stats>
            </Col>
            <Col>
              <PesoAltura altura={data.altura} peso={data.peso}></PesoAltura>
              <br></br>
              <HabilidadPokemon
                habilidades={data.habilidades}
              ></HabilidadPokemon>
            </Col>
          </Row>
        </ColumnaDerecha>
      </PokemonContainer>
    );
  }
  return null;
};

export default Pokemon;
