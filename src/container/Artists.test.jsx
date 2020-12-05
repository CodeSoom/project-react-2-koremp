import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Artists from './Artists';

describe('Artists', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      artists: [
        { id: 1, name: 'TAEMIN' },
        { id: 2, name: 'SHINEE' },
      ],
      selectedArtist: { id: 1, name: 'TAEMIN' },
    }));
  });

  it('renders artists and checked symbol', () => {
    const { container, getByText } = render((
      <Artists />
    ));

    expect(container).toHaveTextContent('TAEMIN(V)');
    expect(container).toHaveTextContent('SHINEE');

    fireEvent.click(getByText('SHINEE'));

    expect(dispatch).toBeCalled();
  });
});
