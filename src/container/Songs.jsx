import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function Songs({ onClickSong }) {
  const songs = useSelector(get('songs'));

  function handleClick(song) {
    return (event) => {
      event.preventDefault();
      onClickSong(song);
    };
  }

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          <a href={`/song/${song.id}`} onClick={handleClick(song)}>
            {song.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
