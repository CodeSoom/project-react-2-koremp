import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import { fetchSong } from '../services/api';

function SongInfo({ song }) {
  const {
    id, name, agency, artist, mvUrl, cheerUrl,
  } = song;

  console.log(song);
  console.log(mvUrl);

  return (
    <div>
      <p>
        {id}
        {' '}
        {name}
        {' '}
        {agency}
        {' '}
        {artist}
        {' '}
      </p>
      <hr />
      {
        mvUrl
          ? (
            <iframe
              title="MV URL"
              width="420"
              height="315"
              src={mvUrl}
            />
          )
          : <p>no mv url</p>
      }
      <hr />
      {
        cheerUrl
          ? (
            <iframe
              title="Cheer URL"
              width="420"
              height="315"
              src={cheerUrl}
            />
          )
          : <p>no cheer url</p>
      }
    </div>
  );
}

export default function Song({ match }) {
  const songId = match.params.id;

  const [song, setSong] = useState(false);

  useEffect(() => {
    fetchSong({ songId }).then((data) => {
      setSong(data[0]);
    }).catch((err) => {
      console.error(err);
      setSong(false);
    });
  }, []);

  return (
    <>
      {
        song !== false
          ? <SongInfo song={song} />
          : <p>loading</p>
      }
    </>
  );
}
