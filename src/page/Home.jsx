import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const NavigationContainer = styled.div({

});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function Home() {
  return (
    <div>
      <NavigationContainer>
        <List>
          <Item><Link to="/about">About</Link></Item>
          <Item><Link to="/login">login</Link></Item>
          <Item><Link to="/song">song</Link></Item>
        </List>
      </NavigationContainer>
    </div>
  );
}
