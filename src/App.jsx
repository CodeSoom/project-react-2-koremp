import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';

import SongList from './page/SongList';
import Song from './page/Song';

import NotFound from './page/NotFound';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
});

const Header = styled.header({
  background: '#EEE',
  '& h1': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function App() {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">FanCheer</Link>
        </h1>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />

        <Route exact path="/song" component={SongList} />
        <Route exact path="/song/:id" component={Song} />

        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}
