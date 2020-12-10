import React from 'react';

import { render } from '@testing-library/react';

import SongDetail from './SongDetail';

import song from '../../fixtures/song';

describe('SongDetail', () => {
  context('when song is valid', () => {
    it('renders SongInfo, SongMusicVideo, SongCheerVideo', () => {
      const { getByText } = render((
        <SongDetail song={song} />
      ));
    });
  });

  context('when song is unvalid', () => {
    it('renders unvalid song id text', () => {
      const { getByText } = render((
        <SongDetail song={false} />
      ));

      expect(getByText(/unvalid song id/)).not.toBeNull();
    });
  });
});
