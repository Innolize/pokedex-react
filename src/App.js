import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon/Pokemon';

const Header = styled.div`
height:10vh;
width: 100%;
background: green;
display:flex;
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
text-align:center;
font-family: 'Roboto', sans-serif;
`

const Wrapper = styled.div`
background-color: #000;
width: 100%;
min-height: 100vh;
`

function App() {
  return (
    <>
      <Wrapper>
        <Router>
          <Header>
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </Header>
          <Layout>
            <Route path="/" exact >
              <Pokedex></Pokedex>
            </Route>
            <Route path="/pokemon/:pokemonSeleccionado" >
              <Pokemon></Pokemon>
            </Route>
          </Layout>

        </Router>
      </Wrapper>
    </>
  );
}

export default App;
