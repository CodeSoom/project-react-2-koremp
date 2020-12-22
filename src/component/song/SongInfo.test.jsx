import React from 'react';

import { render } from '@testing-library/react';

import song from '../../../fixtures/song';

import SongInfo from './SongInfo';

describe('SongInfo', () => {
  const {
    id, name, agency, artist,
  } = song[0];

  it('shows id, name, agency, artist', () => {
    const { getByText } = render((
      <SongInfo
        id={id}
        name={name}
        agency={agency}
        artist={artist}
      />
    ));

    expect(getByText(`${id}`)).not.toBeNull();
    expect(getByText(`${name}`)).not.toBeNull();
    expect(getByText(`${agency}`)).not.toBeNull();
    expect(getByText(`${artist}`)).not.toBeNull();
  });
});
