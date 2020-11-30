import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Home of FanCheer
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/record">record</Link></li>
        <li><Link to="/asdf">Not found</Link></li>
      </ul>
    </div>
  );
}
