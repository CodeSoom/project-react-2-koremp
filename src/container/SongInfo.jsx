import React from 'react';

export default function SongInfo({
  id, name, agency, artist,
}) {
  return (
    <p>
      {id}
      {' '}
      {name}
      {' '}
      {agency}
      {' '}
      {artist}
    </p>
  );
}
