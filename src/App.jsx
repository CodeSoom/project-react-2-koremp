import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Record from './pages/Record';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function Cheer() {
  return (
    <p>Cheer</p>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/cheer" component={Cheer} />
      <Route exact path="/record" component={Record} />
      <Route component={NotFound} />
    </Switch>
  );
}
