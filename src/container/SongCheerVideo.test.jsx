import React from 'react';

import { render } from '@testing-library/react';

import song from '../../fixtures/song';

import SongCheerVideo from './SongCheerVideo';

describe('SongCheerVideo', () => {
  context('with valid cheerUrl', () => {
    const { cheerUrl } = song;

    it('renders CheerVideo', () => {
      const { } = render((
        <SongCheerVideo cheerUrl={cheerUrl} />
      ));

      expect();
    });
  });

  context('with unvalid cheerUrl', () => {
    const cheerUrl = undefined;

    it('renders no mv url', () => {
      const { getByText } = render(
        <SongCheerVideo cheerUrl={cheerUrl} />,
      );

      expect(getByText('no cheer url')).not.toBeNull();
    });
  });
});
