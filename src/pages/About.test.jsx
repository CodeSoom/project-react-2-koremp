import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import About from './About';

test('About', () => {
  const { getByText } = render((
    <MemoryRouter>
      <About />
    </MemoryRouter>
  ));

  expect(getByText(/FanCheer/)).not.toBeNull();
});
