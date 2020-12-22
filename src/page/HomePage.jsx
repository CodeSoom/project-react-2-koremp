import React from 'react';

import { useHistory } from 'react-router-dom';

import HomeContainer from '../container/HomeContainer';
import NavigationBarContainer from '../container/NavigationBarContainer';

import Container from '../styles/pages';

export default function HomePage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <Container>
      <NavigationBarContainer
        handleClickLink={handleClickLink}
      />
      <HomeContainer />
    </Container>
  );
}
