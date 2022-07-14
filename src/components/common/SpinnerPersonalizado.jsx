import React from "react";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";

const ContenedorSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
`;

const StyledSpinner = styled(Spinner)`
  width: 5rem;
  height: 5rem;
`;

const LoadingText = styled.p``;

const SpinnerPersonalizado = () => {
  return (
    <ContenedorSpinner>
      <StyledSpinner
        animation="border"
        role="status"
        id="spinner"
      ></StyledSpinner>
      <LoadingText>Cargando...</LoadingText>
    </ContenedorSpinner>
  );
};

export default SpinnerPersonalizado;
