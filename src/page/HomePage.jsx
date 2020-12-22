import React from 'react';

import { useHistory } from 'react-router-dom';

import NavigationBar from '../component/NavigationBar';
import Home from '../container/HomeContainer';

export default function HomePage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <>
      <NavigationBar handleClickLink={handleClickLink} />
      <Home />
    </>
  );
}
