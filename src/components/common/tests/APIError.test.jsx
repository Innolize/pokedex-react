import { APIError } from "../APIError";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("APIError", () => {
  it("Renderiza componente APIError", () => {
    render(<APIError></APIError>);
    screen.findByText("Ha habido un error, prueba recargando la página.");
  });
});
