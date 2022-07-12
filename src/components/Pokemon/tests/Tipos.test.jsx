import React from "react";
import { Tipos } from "../Tipos";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Renderiza el contenido", () => {
  it("Renderiza correctamente un tipo", () => {
    const MOCK_TIPOS = ["Planta"];
    const PLANTA_URL = "/tipo-iconos/planta.png";
    render(<Tipos tipos={MOCK_TIPOS}></Tipos>);
    expect(screen.getByAltText("Planta")).toHaveAttribute("src", PLANTA_URL);
  });
  it("Renderiza correctamente dos tipos", () => {
    const MOCK_TIPOS = ["Planta", "Veneno"];
    const PLANTA_URL = "/tipo-iconos/planta.png";
    const VENENO_URL = "/tipo-iconos/veneno.png";
    render(<Tipos tipos={MOCK_TIPOS}></Tipos>);
    expect(screen.getByAltText("Planta")).toHaveAttribute("src", PLANTA_URL);
    expect(screen.getByAltText("Veneno")).toHaveAttribute("src", VENENO_URL);
  });
});
