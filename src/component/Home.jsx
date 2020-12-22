import React from 'react';

import styled from '@emotion/styled';

import ReleasedList from './home/ReleasedList';
import TrendingList from './home/TrendingList';

const Container = styled.div({
  display: 'flex',

});

export default function Home() {
  return (
    <Container>
      <ReleasedList />
      <TrendingList />
    </Container>
  );
}
