import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RecordWebcam from './RecordWebcam';

test('RecordWebcam', () => {
  const { getByText } = render((
    <MemoryRouter>
      <RecordWebcam />
    </MemoryRouter>
  ));
});
