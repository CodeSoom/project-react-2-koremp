import React from 'react';

export default function SongMusicVideo({ name, mvUrl }) {
  if (!mvUrl) {
    return <p>no mv url</p>;
  }

  return (
    <iframe
      title={`${name} music video`}
      width="420"
      height="315"
      src={mvUrl}
    />
  );
}
