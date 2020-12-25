import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

export default function SongList() {
  const history = useHistory();

  function handleClickSong(song) {
    const url = `/song/${song.id}`;
    history.push(url);
  }

  return (
    <>
      <SongList handleClickSong={handleClickSong} />
    </>
  );
}
