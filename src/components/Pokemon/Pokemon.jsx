import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DescripcionPokemon } from "./DescripcionPokemon";
import { Tipos } from "./Tipos";
import { Estadisticas } from "./Estadisticas";
import { HabilidadPokemon } from "./HabilidadPokemon";
import { numeroTresCifras } from "../../utils/numeroTresCifras";
import styled from "@emotion/styled";
import { NombrePokemon } from "./NombrePokemon";
import { PesoAltura } from "./PesoAlturaPokemon";
import SpinnerPersonalizado from "../common/SpinnerPersonalizado";
import { useGetPokemon } from "../../customHooks/useGetPokemon";

const PokemonContainer = styled(Container)`
  display: flex;
  margin-top: 1rem;
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

const Separador = styled.br``;

export const Pokemon = () => {
  const { id } = useParams();
  const { isSuccess, data, isLoading, isError } =
    useGetPokemon(id);

  if (isLoading) {
    return <SpinnerPersonalizado></SpinnerPersonalizado>;
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
          <Tipos tipos={data.tipos}></Tipos>
          <DescripcionPokemon
            descripcion={data.descripcion}
          ></DescripcionPokemon>

          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <Estadisticas stats={data.stats}></Estadisticas>
            </Col>
            <Col>
              <PesoAltura altura={data.altura} peso={data.peso}></PesoAltura>
              <Separador></Separador>
              <HabilidadPokemon
                habilidades={data.habilidades}
              ></HabilidadPokemon>
            </Col>
          </Row>
        </ColumnaDerecha>
      </PokemonContainer>
    );
  }
};
