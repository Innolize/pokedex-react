import React from 'react';
// import Header from './components/Header';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Pokedex from './components/Pokedex';

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
            <Link to="/">Home</Link>
          </Header>
          <Layout>
            <Route path="/" exact >
              <Pokedex></Pokedex>

            </Route>
          </Layout>

        </Router>
      </Wrapper>
    </>
  );
}

export default App;
