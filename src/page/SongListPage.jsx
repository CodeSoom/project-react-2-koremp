import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import NavigationBar from '../component/NavigationBar';

export default function SongList() {
  const history = useHistory();

  function handleClickSong(song) {
    const url = `/song/${song.id}`;
    history.push(url);
  }

  return (
    <>
      <NavigationBar />
      <SongList handleClickSong={handleClickSong} />
    </>
  );
}
