import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function SongInfo() {
  const selectedSong = useSelector(get('selectedSong'));

  return (
    <div>
      this song is blah blah
      {selectedSong}
    </div>
  );
}
