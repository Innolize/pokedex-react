import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DescripcionPokemon from "./DescripcionPokemon";
import TiposTraducidos from "./tipos";
import Stats from "./Stats";
import HabilidadPokemon from "./HabilidadPokemon";
import { primerLetraMayus } from "../../utils/primerLetraMayus";
import { useQuery } from "react-query";
import { obtenerPokemon } from "../../api/getPokemon";
import { numeroTresCifras } from "../../utils/numeroTresCifras";

const Pokemon = ({ pokemon, id }) => {
  const { pokemonSeleccionado } = useParams();
  const { isSuccess, data, isLoading, isError } = useQuery(["pokemon"], () =>
    obtenerPokemon(pokemonSeleccionado)
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "600px",
        }}
      >
        <Spinner
          style={{ width: "5rem", height: "5rem" }}
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError) {
    return <div>error</div>;
  }

  if (isSuccess) {
    return (
      <Container style={{ width: "80%" }}>
        <Row style={{ width: "100%" }}>
          <Col>
            <img
              style={{ width: "100%" }}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroTresCifras(
                data.id
              )}.png`}
              alt={pokemon}
            ></img>
          </Col>
          <Col
            style={{
              backgroundColor: "white",
              color: "black",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "1em", textAlign: "center" }}>
              <h3>
                Nº{data.id} {primerLetraMayus(data.nombre)}
              </h3>
            </div>
            <TiposTraducidos tipos={data.tipos}></TiposTraducidos>
            <DescripcionPokemon
              descripcion={data.descripcion}
            ></DescripcionPokemon>

            <Row style={{ paddingTop: "10px" }}>
              <Col>
                <Stats stats={data.stats}></Stats>
              </Col>
              <Col>
                <div>
                  <p>
                    <strong>Peso:</strong> {data.peso / 10}Kg
                  </p>
                </div>
                <div>
                  <strong>Altura:</strong> {data.altura / 10} m
                </div>
                <div>
                  <HabilidadPokemon
                    habilidades={data.habilidades}
                  ></HabilidadPokemon>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
};

export default Pokemon;
