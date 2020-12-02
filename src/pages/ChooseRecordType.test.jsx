import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ChooseRecordType from './ChooseRecordType';

test('ChooseRecordType', () => {
  const { getByText } = render((
    <MemoryRouter>
      <ChooseRecordType />
    </MemoryRouter>

  ));

  expect(getByText('Choose Record Type')).not.toBeNull();
  expect(getByText('mic')).not.toBeNull();
  expect(getByText('webcam')).not.toBeNull();
});
