import { PesoAltura } from "../PesoAlturaPokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("PesoAlturaPokemon", () => {
  it("Renderiza peso y altura correctamente ", () => {
    const props = { peso: 11, altura: 20 };
    const alturaAMetros = 2;
    render(<PesoAltura peso={props.peso} altura={props.altura}></PesoAltura>);
    const elementoAltura = screen.getByText(alturaAMetros.toString(), {
      exact: false,
    });
    const elementoPeso = screen.getByText(props.peso.toString(), {
      exact: false,
    });
    expect(elementoAltura.textContent).toBe(`Altura: ${2} m`);
    expect(elementoPeso.textContent).toBe(`Peso: ${11} Kg`);
  });
});
