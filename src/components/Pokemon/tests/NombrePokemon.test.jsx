import { NombrePokemon } from "../NombrePokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("NombrePokemon", () => {
  it("Muestra numero y nombre de pokemon", () => {
    const MOCK_ID = "15";
    const MOCK_NOMBRE = "test-nombre";
    const RESPUESTA_ESPERADA = "Nº15 Test-nombre";
    render(<NombrePokemon id={MOCK_ID} nombre={MOCK_NOMBRE}></NombrePokemon>);
    const elemento = screen.getByText(MOCK_ID, { exact: false });
    expect(elemento.textContent).toBe(RESPUESTA_ESPERADA);
  });
});
