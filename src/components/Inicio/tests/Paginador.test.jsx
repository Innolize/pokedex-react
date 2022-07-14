import { Paginador } from "../Paginador";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Paginador", () => {
  const botonAnterior = jest.fn();
  const botonSiguiente = jest.fn();
  const itemOnClick = jest.fn();
  const totalPokemons = 50;
  const pokemonesPorPagina = 10;

  afterEach(() => jest.clearAllMocks());

  it("Renderiza correctamente botones siguiente, anterior e indices ", async () => {
    render(
      <Paginador
        botonAnterior={botonAnterior}
        botonSiguiente={botonSiguiente}
        itemOnClick={itemOnClick}
        totalPokemones={totalPokemons}
        pokemonesPorPagina={pokemonesPorPagina}
      ></Paginador>,
      { wrapper: BrowserRouter }
    );
    screen.getByText("Siguiente");
    screen.getByText("Anterior");
    const itemsArray = await screen.findAllByRole("listitem");
    expect(itemsArray.length).toBe(5);
    const primerItem = itemsArray[0];
    expect(primerItem).toHaveClass("active");
  });

  it("Cambia pagina actual al presionar botones siguiente o anterior ", async () => {
    render(
      <Paginador
        botonAnterior={botonAnterior}
        botonSiguiente={botonSiguiente}
        itemOnClick={itemOnClick}
        totalPokemones={totalPokemons}
        pokemonesPorPagina={pokemonesPorPagina}
      ></Paginador>,
      { wrapper: BrowserRouter }
    );
    const itemsArray = await screen.findAllByRole("listitem");
    const elementoBotonSiguiente = screen.getByText("Siguiente");
    userEvent.click(elementoBotonSiguiente);
    expect(itemsArray[1]).toHaveClass("active");
    userEvent.click(elementoBotonSiguiente);
    expect(itemsArray[2]).toHaveClass("active");
    const elementoBotonAnterior = screen.getByText("Anterior");
    userEvent.click(elementoBotonAnterior);
    expect(itemsArray[1]).toHaveClass("active");
    expect(botonSiguiente).toHaveBeenCalledTimes(2);
    expect(botonAnterior).toHaveBeenCalledTimes(1);
  });

  it("Botones anterior no cambia indice si se encuentra en la primera pagina", async () => {
    render(
      <Paginador
        botonAnterior={botonAnterior}
        botonSiguiente={botonSiguiente}
        itemOnClick={itemOnClick}
        totalPokemones={totalPokemons}
        pokemonesPorPagina={pokemonesPorPagina}
      ></Paginador>,
      { wrapper: BrowserRouter }
    );
    const itemsArray = await screen.findAllByRole("listitem");
    expect(itemsArray[0]).toHaveClass("active");
    const elementoBotonAnterior = screen.getByText("Anterior");
    userEvent.click(elementoBotonAnterior);
    expect(itemsArray[0]).toHaveClass("active");
  });

  it("Botones siguiente no cambia indice si se encuentra en la ultima pagina", async () => {
    render(
      <Paginador
        botonAnterior={botonAnterior}
        botonSiguiente={botonSiguiente}
        itemOnClick={itemOnClick}
        totalPokemones={totalPokemons}
        pokemonesPorPagina={pokemonesPorPagina}
      ></Paginador>,
      { wrapper: BrowserRouter }
    );
    const items = screen.getAllByRole("listitem");
    const ultimoItem = items[items.length - 1];
    expect(items[0]).toHaveClass("active");
    //utiliza firstchild porque el link esta dentro del li
    userEvent.click(ultimoItem.firstChild);
    screen.debug();
    expect(ultimoItem).toHaveClass("active");
    const elementoBotonSiguiente = screen.getByText("Siguiente");
    userEvent.click(elementoBotonSiguiente);
    expect(ultimoItem).toHaveClass("active");
  });
});
