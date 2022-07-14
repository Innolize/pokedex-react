import React from "react";
import { Estadisticas } from "../Estadisticas";
import { render, screen } from "@testing-library/react";

describe("Renderiza estadisticas correctamente", () => {
  it("should ", () => {
    const MOCK_ESTADISTICAS = [
      { base_stat: 10 },
      { base_stat: 20 },
      { base_stat: 30 },
      { base_stat: 40 },
      { base_stat: 50 },
      { base_stat: 60 },
    ];
    render(<Estadisticas stats={MOCK_ESTADISTICAS}></Estadisticas>);
    const ElementoPuntosDeSalud = screen.getByText(":10", { exact: false });
    expect(ElementoPuntosDeSalud.textContent).toEqual("PS:10");
  });
});
