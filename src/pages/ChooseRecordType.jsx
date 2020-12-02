import React from 'react';

import { Link } from 'react-router-dom';

export default function ChooseRecordType() {
  return (
    <div>
      <h2>Choose Record Type</h2>
      <ul>
        <li><Link to="/record/mic">mic</Link></li>
        <li><Link to="/record/webcam">webcam</Link></li>
      </ul>
    </div>
  );
}
