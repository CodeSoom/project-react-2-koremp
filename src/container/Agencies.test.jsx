import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Agencies from './Agencies';

describe('Agencies', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      agencies: [
        { id: 1, name: 'SM' },
        { id: 2, name: 'CUBE' },
      ],
      selectedAgency: { id: 1, name: 'SM' },
    }));
  });

  it('renders checked agency', () => {
    const { container, getByText } = render((
      <Agencies />
    ));

    expect(container).toHaveTextContent('SM(V)');
    expect(container).toHaveTextContent('CUBE');

    fireEvent.click(getByText('CUBE'));

    expect(dispatch).toBeCalled();
  });
});
