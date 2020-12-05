import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Songs from './Songs';

test('Songs', () => {
  useSelector.mockImplementation((selector) => selector({
    songs: [
      {
        id: 1, name: 'WANT',
      },
      {
        id: 2, name: '그리워하다',
      },
    ],
  }));

  const handleClick = jest.fn();

  const { container, getByText } = render((
    <Songs onClickSong={handleClick} />
  ));

  expect(container).toHaveTextContent('WANT');

  fireEvent.click(getByText('WANT'));

  expect(handleClick).toBeCalledWith({ id: 1, name: 'WANT' });
});
