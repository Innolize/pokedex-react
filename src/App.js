import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon/Pokemon";
import { QueryClient, QueryClientProvider } from "react-query";

const Header = styled.div`
  height: 10vh;
  width: 100%;
  background: green;
  display: flex;
`;

const Link = styled(NavLink)`
  padding: 0.5em;
  background: none;
  border: none;
  border-radius: 1em;
  outline: none;
  color: white;
  text-decoration: none;
`;

const Layout = styled.div`
  color: white;
  width: 100%;
  align-items: center;
  margin: auto;
  text-align: center;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 100vh;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Router>
            <Header>
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </Header>
            <Layout>
              <Route path="/" exact>
                <Pokedex></Pokedex>
              </Route>
              <Route path="/pokemon/:pokemonSeleccionado">
                <Pokemon></Pokemon>
              </Route>
            </Layout>
          </Router>
        </Wrapper>
      </QueryClientProvider>
    </>
  );
}

export default App;
