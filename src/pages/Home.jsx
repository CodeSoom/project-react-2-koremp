import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home of FanCheer</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/record">record</Link></li>
      </ul>
      <div>
        <p>To-do: Show cheering</p>
        <p>asdf</p>
      </div>
    </div>
  );
}
