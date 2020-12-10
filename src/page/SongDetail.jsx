import React, { useEffect, useState } from 'react';

import { fetchSong } from '../services/api';

import SongInfo from '../container/SongInfo';
import SongMusicVideo from '../container/SongMusicVideo';
import SongCheerVideo from '../container/SongCheerVideo';

function SongDetail({ song }) {
  if (!song) {
    return (
      <p>unvalid song, return to select song page</p>
    );
  }

  const {
    id, name, agency, artist, mvUrl, cheerUrl,
  } = song;

  return (
    <>
      <SongInfo id={id} name={name} artist={artist} agency={agency} />
      <SongMusicVideo mvUrl={mvUrl} />
      <SongCheerVideo cheerUrl={cheerUrl} />
    </>
  );
}

export default function Song({ match }) {
  const songId = match.params.id;

  const [song, setSong] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSong({ songId }).then((data) => {
      setSong(data[0]);
    }).catch((err) => {
      console.error(err);
      setSong(false);
    });

    setIsLoading(false);
  }, []);

  return (
    <>
      {
        isLoading
          ? <p> Loading </p>
          : <SongDetail song={song} />
      }
    </>
  );
}
