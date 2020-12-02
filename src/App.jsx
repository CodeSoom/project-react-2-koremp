import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ChooseRecordType from './pages/ChooseRecordType';
import RecordMic from './pages/RecordMic';
import RecordWebcam from './pages/RecordWebcam';

function Cheer() {
  return (
    <p>Cheer</p>
  );
}

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
        <Route path="/cheer" component={Cheer} />
        <Route exact path="/record" component={ChooseRecordType} />
        <Route path="record/mic" component={RecordMic} />
        <Route path="record/webcam" component={RecordWebcam} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
