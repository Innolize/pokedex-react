import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { PesoAltura } from "./PesoAlturaPokemon";

test("renderiza contenido", () => {
  const props = { peso: 11, altura: 20 };
  render(<PesoAltura props={props}></PesoAltura>);
  screen.getByText("Altura");
  screen.getByText("Peso");
});
