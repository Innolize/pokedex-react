import { CartaPokemon } from "../CartaPokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("CartaPokemon", () => {
  it("Renderiza correctamente el componente", async () => {
    const indicePokemon = 1;
    const pokemon = "bulbasaur";
    render(
      <CartaPokemon
        indicePokemon={indicePokemon}
        pokemon={pokemon}
      ></CartaPokemon>,
      { wrapper: BrowserRouter }
    );
    const indiceYNombre = "#1 Bulbasaur";
    screen.getByText(indiceYNombre);
    screen.getByAltText(pokemon);
  });
});
