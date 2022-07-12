import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { DescripcionPokemon } from "../DescripcionPokemon";
import { render, screen } from "@testing-library/react";

describe("DescripcionPokemon", () => {
  it("Comprueba que descripcion sea muestre correctamente en el componente ", () => {
    const MOCK_DESCRIPCION = "Esta es una descripcion";
    render(
      <DescripcionPokemon descripcion={MOCK_DESCRIPCION}></DescripcionPokemon>
    );
    const element = screen.getByText("descripcion", { exact: false });
    expect(element.textContent).toBe(MOCK_DESCRIPCION);
  });
});
