import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RecordMic from './RecordMic';

test('RecordMic', () => {
  const { getByText } = render((
    <MemoryRouter>
      <RecordMic />
    </MemoryRouter>
  ));
});
