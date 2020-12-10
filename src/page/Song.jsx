import React, { useEffect, useState } from 'react';

import { fetchSong } from '../services/api';

import SongDetail from '../container/SongDetail';

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
          ? <p>loading</p>
          : <SongDetail song={song} />
      }
    </>
  );
}
