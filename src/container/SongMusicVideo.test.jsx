import React from 'react';

import { render } from '@testing-library/react';

import song from '../../fixtures/song';

import SongMusicVideo from './SongMusicVideo';

describe('SongMusicVideo', () => {
  context('with valid mvUrl', () => {
    const { mvUrl } = song;

    it('renders MusicVideo', () => {
      const { } = render((
        <SongMusicVideo mvUrl={mvUrl} />
      ));

      expect();
    });
  });

  context('with unvalid mvUrl', () => {
    const mvUrl = undefined;

    it('renders no mv url', () => {
      const { getByText } = render(
        <SongMusicVideo mvUrl={mvUrl} />,
      );

      expect(getByText('no mv url')).not.toBeNull();
    });
  });
});
