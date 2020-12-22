import React from 'react';

export default function SongInfo({
  id, name, agency, artist,
}) {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{agency}</p>
      <p>{artist}</p>
    </div>
  );
}
