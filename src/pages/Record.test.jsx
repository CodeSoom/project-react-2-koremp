import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Record from './Record';

test('Record', () => {
  const { getByText } = render((
    <MemoryRouter>
      <Record />
    </MemoryRouter>
  ));

  expect(getByText(/Record Page/)).not.toBeNull();
});
