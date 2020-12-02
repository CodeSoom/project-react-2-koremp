import React from 'react';

import { render } from '@testing-library/react';

import About from './About';

test('About', () => {
  const { getByText } = render((
    <About />
  ));

  expect(getByText('FanCheer is online cheering service.')).not.toBeNull();
});
