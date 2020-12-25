import React from 'react';

import { useHistory } from 'react-router-dom';

import HomeContainer from '../container/HomeContainer';
import NavigationBarContainer from '../container/NavigationBarContainer';

import Container from '../styles/pages';

export default function HomePage() {
  return (
    <Container>
      <HomeContainer />
    </Container>
  );
}
