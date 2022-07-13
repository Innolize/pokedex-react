import { Pokemon } from "../Pokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { findByText, render, screen } from "@testing-library/react";
import { getHabilidadesError, handlers } from "../../../api/mock/handlers";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: 4,
  }),
  useHistory: jest.fn(),
}));

describe("Pokemon", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const ReactQueryWrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Deberia renderizar componente de carga al iniciar la pagina", async () => {
    render(
      <ReactQueryWrapper>
        <Pokemon></Pokemon>
      </ReactQueryWrapper>
    );
    screen.findByText("Cargando...");
  });

  it("Debe renderizar correctamente el componente pokemon ", async () => {
    render(
      <ReactQueryWrapper>
        <Pokemon></Pokemon>
      </ReactQueryWrapper>
    );
    const element = await screen.findByText("Venusaur", { exact: false });
  });

  it("Debe renderizar componente error al recibir error de la API ", async () => {
    server.use(
      rest.get("https://pokeapi.co/api/v2/pokemon/:id", (req, res, ctx) => {
        console.log("entre a la request");
        return res.once(
          ctx.status(500),
          ctx.json({ message: "Error interno de API" })
        );
      })
    );

    render(
      <ReactQueryWrapper>
        <Pokemon></Pokemon>
      </ReactQueryWrapper>
    );
    const element = await screen.findByText(
      "Ha habido un error, prueba recargando la página."
    );
  });
});
