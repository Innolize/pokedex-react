import { BuscadorPokemon } from "../BuscadorPokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BuscadorPokemon", () => {
  it("Deberia renderizarse correctamente con su valor inicial ", async () => {
    const MOCK_BUSQUEDA = jest.fn();
    const DEFAULT_VALOR_BUSQUEDA = "12345";
    render(
      <BuscadorPokemon
        onChangeBusqueda={MOCK_BUSQUEDA}
        value={DEFAULT_VALOR_BUSQUEDA}
      ></BuscadorPokemon>
    );
    const inputBusqueda = screen.getByPlaceholderText("Busca un pokémon!");
    expect(inputBusqueda).toHaveValue(DEFAULT_VALOR_BUSQUEDA);
    screen.getByAltText("pokemon-logo");
  });

  it("Deberia renderizarse correctamente con su valor inicial ", async () => {
    const MOCK_BUSQUEDA = jest.fn();
    const DEFAULT_VALOR_BUSQUEDA = "";
    render(
      <BuscadorPokemon
        onChangeBusqueda={MOCK_BUSQUEDA}
        value={DEFAULT_VALOR_BUSQUEDA}
      ></BuscadorPokemon>
    );
    const inputBusqueda = screen.getByPlaceholderText("Busca un pokémon!");
    userEvent.click(inputBusqueda);
    userEvent.keyboard("pikachu");
    expect(MOCK_BUSQUEDA).toHaveBeenCalledTimes(7);
  });
});
