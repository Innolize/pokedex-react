import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Pokedex from "./components/Inicio/Pokedex";
import { Pokemon } from "./components/Pokemon/Pokemon";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Header = styled.div`
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

const Inicio = styled.h3`
  margin: 10px;
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
                <Inicio>Inicio</Inicio>
              </Link>
            </Header>
            <Layout>
              <Route path="/" exact>
                <Pokedex></Pokedex>
              </Route>
              <Route path="/pokemon/:id">
                <Pokemon></Pokemon>
              </Route>
            </Layout>
          </Router>
        </Wrapper>
        {/* <ReactQueryDevtools></ReactQueryDevtools> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
