import { Pokedex } from "../Pokedex";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../../../api/mock/pokedexHandler";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Name of the group", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 1,
      },
    },
  });
  const ReactQueryWrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const server = setupServer(...handlers);

  beforeAll(() => {
    queryClient.clear();
    server.listen();
  });
  afterEach(() => {
    queryClient.clear();
    server.resetHandlers();
  });
  afterAll(() => {
    queryClient.clear();
    server.close();
  });

  it("Deberia mostrar los primeros 3 pokemons ", async () => {
    const testPokemonesPorPagina = 3;
    const testTotalPokemones = 9;
    const pokemon1 = "bulbasaur";
    const pokemon2 = "ivysaur";
    const pokemon3 = "venusaur";
    render(
      <ReactQueryWrapper>
        <BrowserRouter>
          <Pokedex
            pokemonesPorPagina={testPokemonesPorPagina}
            totalPokemones={testTotalPokemones}
          ></Pokedex>
        </BrowserRouter>
      </ReactQueryWrapper>
    );
    expect(screen.getByText("Cargando..."));
    await screen.findByText(pokemon1, { exact: false });
    await screen.findByText(pokemon2, { exact: false });
    await screen.findByText(pokemon3, { exact: false });
    screen.debug();
  });

  it("Deberia encontrar pokemon con el buscador  ", async () => {
    const POKEMONES_POR_PAGINA = 3;
    const TOTAL_POKEMONES = 9;
    const TEXTO_POKEMON = "char";
    render(
      <ReactQueryWrapper>
        <BrowserRouter>
          <Pokedex
            pokemonesPorPagina={POKEMONES_POR_PAGINA}
            totalPokemones={TOTAL_POKEMONES}
          ></Pokedex>
        </BrowserRouter>
      </ReactQueryWrapper>
    );
    const barraDeBusqueda = await screen.findByPlaceholderText(
      "Busca un pokémon!"
    );
    userEvent.click(barraDeBusqueda);
    userEvent.keyboard(TEXTO_POKEMON);
    await screen.findByAltText("charmander", { exact: false });

    screen.debug();
  });

  it("Al presionar siguiente o anterior se renderizan nuevos pokemones ", async () => {
    const POKEMONES_POR_PAGINA = 3;
    const TOTAL_POKEMONES = 9;

    render(
      <ReactQueryWrapper>
        <BrowserRouter>
          <Pokedex
            pokemonesPorPagina={POKEMONES_POR_PAGINA}
            totalPokemones={TOTAL_POKEMONES}
          ></Pokedex>
        </BrowserRouter>
      </ReactQueryWrapper>
    );
    const botonSiguiente = await screen.findByText("Siguiente");
    const botonAnterior = await screen.findByText("Anterior");

    const bulbasaur = screen.queryByAltText("bulbasaur", { exact: false });
    userEvent.click(botonSiguiente);
    const charmander = screen.queryByAltText("charmander", {
      exact: false,
    });
    await waitFor(async () => {
      expect(bulbasaur).not.toBeInTheDocument();
    });
    userEvent.click(botonAnterior);

    await waitFor(async () => {
      expect(charmander).not.toBeInTheDocument();
    });

    await screen.findByAltText("bulbasaur", { exact: false });
  });
});
