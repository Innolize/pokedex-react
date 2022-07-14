import { HabilidadPokemon } from "../HabilidadPokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("HabilidadesPokemon", () => {
  it("Muestra habilidades ", () => {
    const habilidades = ["Habilidad1", "Habilidad2"];
    render(<HabilidadPokemon habilidades={habilidades}></HabilidadPokemon>);
    screen.getByText("Habilidad1");
    screen.getByText("Habilidad2");
  });
});