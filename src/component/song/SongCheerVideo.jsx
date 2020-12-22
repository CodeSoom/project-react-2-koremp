import React from 'react';

export default function SongCheerVideo({ name, cheerUrl }) {
  if (!cheerUrl) {
    return <p>no cheer url</p>;
  }

  return (
    <iframe
      title={`${name} cheer video url`}
      width="420"
      height="315"
      src={cheerUrl}
    />
  );
}
