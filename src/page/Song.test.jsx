import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Song from './Song';

import SONG from '../../fixtures/song';

describe('Song', () => {
  const dispatch = jest.fn();

  function renderSong(match) {
    return render((
      <Song match={match} />
    ));
  }

  context('when songId is valid', () => {
    beforeEach(() => {
      dispatch.mockClear();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        song: SONG[0],
      }));
    });

    const match = {
      params: {
        id: 1,
      },
    };

    const {
      id, name, agency, artist,
    } = SONG[0];

    it('renders SongInfo', () => {
      const { getByText } = renderSong(match);

      expect(dispatch).toBeCalled();

      expect(getByText(`${id}`)).not.toBeNull();
      expect(getByText(`${name}`)).not.toBeNull();
      expect(getByText(`${agency}`)).not.toBeNull();
      expect(getByText(`${artist}`)).not.toBeNull();
    });

    it('renders SongMusicVideo', () => {
      const { queryByText } = renderSong(match);

      expect(dispatch).toBeCalled();

      expect(queryByText(`${name} music video`));
    });

    it('renders SongCheerVideo', () => {
      const { queryByText } = renderSong(match);

      expect(dispatch).toBeCalled();

      expect(queryByText(`${name} cheer video`));
    });
  });

  context('when songId is unvalid', () => {
    const match = {
      params: {
        id: 21,
      },
    };

    beforeEach(() => {
      dispatch.mockClear();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        song: undefined,
      }));
    });

    it('renders unvalid song id text', () => {
      const { getByText } = renderSong(match);

      expect(dispatch).toBeCalled();

      expect(getByText(/unvalid song id/)).not.toBeNull();
    });
  });
});
