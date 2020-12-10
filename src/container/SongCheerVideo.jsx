import React from 'react';

export default function SongCheerVideo({ cheerUrl }) {
  if (!cheerUrl) {
    return <p>no cheer url</p>;
  }

  return (
    <iframe
      title="CHEER URL"
      width="420"
      height="315"
      src={cheerUrl}
    />
  );
}
