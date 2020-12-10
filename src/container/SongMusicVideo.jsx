import React from 'react';

export default function SongMusicVideo({ mvUrl }) {
  if (!mvUrl) {
    return <p>no mv url</p>;
  }

  return (
    <iframe
      title="MV URL"
      width="420"
      height="315"
      src={mvUrl}
    />
  );
}
