import { Pokemon } from "../Pokemon";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { findByText, render, screen } from "@testing-library/react";
import { handlers } from "../../../api/mock/handlers";
import { setupServer } from "msw/node";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: 4,
  }),
  useHistory: jest.fn(),
}));

describe("Pokemon", () => {
  const queryClient = new QueryClient();
  const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Deberia renderizar componente de carga al iniciar la pagina", async () => {
    render(
      <Wrapper>
        <Pokemon></Pokemon>
      </Wrapper>
    );
    screen.findByText("Cargando...");
  });

  it("Debe renderizar correctamente el componente pokemon ", async () => {
    render(
      <Wrapper>
        <Pokemon></Pokemon>
      </Wrapper>
    );
    const element = await screen.findByText("Venusaur", { exact: false });
  });
});
