import React from 'react';

import { Link } from 'react-router-dom';

export default function RecordPage() {
  return (
    <div>
      <h1>Record Page</h1>
      <ul>
        <li><Link to="/record/mic">mic</Link></li>
        <li><Link to="/record/webcam">webcam</Link></li>
      </ul>
    </div>
  );
}
