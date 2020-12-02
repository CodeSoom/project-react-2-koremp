import React from 'react';

import { Route } from 'react-router-dom';

import ChooseRecordType from './ChooseRecordType';
import RecordMic from './RecordMic';
import RecordWebcam from './RecordWebcam';

export default function Record({ match }) {
  return (
    <div>
      <h1>Record</h1>
      <Route exact path={match.path} component={ChooseRecordType} />
      <Route path={`${match.path}/mic`} component={RecordMic} />
      <Route path={`${match.path}/webcam`} component={RecordWebcam} />
    </div>
  );
}
