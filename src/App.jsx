import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';

import SongList from './page/SongList';
import Song from './page/Song';

import NotFound from './page/NotFound';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">Header</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />

        <Route exact path="/song" component={SongList} />
        <Route exact path="/song/:id" component={Song} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
