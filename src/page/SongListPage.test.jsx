import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SongList from './SongList';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('SongList', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      agencies: [
        { id: 1, name: 'SM' },
      ],
      artists: [
        { id: 1, name: 'TAEMIN' },
      ],
      songs: [
        { id: 1, name: 'WANT' },
      ],
    }));
  });

  function renderSelectSong() {
    return render((
      <MemoryRouter>
        <SongList />
      </MemoryRouter>
    ));
  }

  it('renders agency select buttons', () => {
    const { queryByText } = renderSelectSong();

    expect(dispatch).toBeCalled();

    expect(queryByText('SM')).not.toBeNull();
  });

  it('renders artist select buttons', () => {
    const { queryByText } = renderSelectSong();

    expect(dispatch).toBeCalled();

    expect(queryByText('TAEMIN')).not.toBeNull();
  });

  it('renders links of songs', () => {
    const { container } = renderSelectSong();

    expect(container.innerHTML).toContain('<a href="');
  });

  context('when click song', () => {
    it('occurs handle event', () => {
      const { getByText } = renderSelectSong();

      fireEvent.click(getByText('WANT'));

      expect(mockPush).toBeCalledWith('/song/1');
    });
  });
});
