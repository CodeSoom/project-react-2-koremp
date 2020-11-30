import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Home from './Home';

test('Home', () => {
  const { getByText } = render((
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  ));

  expect(getByText(/Home of FanCheer/)).not.toBeNull();
});
