import React from 'react';

import { Link } from 'react-router-dom';

export default function ChooseRecordType({ match }) {
  return (
    <div>
      <h2>Choose Record Type</h2>
      <ul>
        <li><Link to={`${match.path}/mic`}>mic</Link></li>
        <li><Link to={`${match.path}/webcam`}>webcam</Link></li>
      </ul>
      <button onClick={() => console.log(match)}>test</button>
    </div>
  );
}
