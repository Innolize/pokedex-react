import { ListadoPokemon } from "../ListadoPokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("ListadoPokemon", () => {
  it("Renderiza una lista de pokemones ", async () => {
    const listaDePokemones = [
      { url: "https://pokeapi.co/api/v2/pokemon/1/", name: "bulbasaur" },
      { url: "https://pokeapi.co/api/v2/pokemon/2/", name: "ivysaur" },
      { url: "https://pokeapi.co/api/v2/pokemon/3/", name: "venusaur" },
    ];

    render(
      <ListadoPokemon listaPokemones={listaDePokemones}></ListadoPokemon>,
      { wrapper: BrowserRouter }
    );

    const imgArray = await screen.findAllByRole("img");
    expect(imgArray.length).toBe(3);
  });

  it("No renderiza cartas al no pasarle pokemons ", async () => {
    const listaDePokemones = [];

    render(
      <ListadoPokemon listaPokemones={listaDePokemones}></ListadoPokemon>,
      { wrapper: BrowserRouter }
    );

    const imgArray = screen.queryAllByRole("img");
    expect(imgArray.length).toBe(0);
  });
});
