import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Record from './pages/Record';
import RecordMic from './pages/RecordMic';
import RecordWebcam from './pages/RecordWebcam';

function Login() {
  return (
    <p>LoginPage</p>
  );
}

function NotFound() {
  return (
    <p>404 Not Found</p>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route exact path="/record" component={Record} />
      <Route path="/record/mic" component={RecordMic} />
      <Route path="/record/webcam" component={RecordWebcam} />
      <Route component={NotFound} />
    </Switch>
  );
}
