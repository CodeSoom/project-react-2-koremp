import React from 'react';

import SongInfo from './SongInfo';
import SongMusicVideo from './SongMusicVideo';
import SongCheerVideo from './SongCheerVideo';

export default function SongDetail({ song }) {
  if (!song) {
    return (
      <p> unvalid song id </p>
    );
  }

  return (
    <>
      <SongInfo />
      <SongMusicVideo />
      <SongCheerVideo />
    </>
  );
}
