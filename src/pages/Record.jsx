import React from 'react';

import { Link, Route } from 'react-router-dom';

import RecordMic from './RecordMic';
import RecordWebcam from './RecordWebcam';

export default function Record({ match }) {
  return (
    <div>
      <h1>Record Page</h1>
      <ul>
        <li><Link to={`${match.path}/mic`}>mic</Link></li>
        <li><Link to={`${match.path}/webcam`}>webcam</Link></li>
      </ul>
      <Route path={`${match.path}/mic`} component={RecordMic} />
      <Route path={`${match.path}/webcam`} component={RecordWebcam} />
    </div>
  );
}
