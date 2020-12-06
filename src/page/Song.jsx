import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import SongInfo from '../container/SongInfo';
import AlbumInfo from '../container/AlbumInfo';
import ArtistInfo from '../container/ArtistInfo';

import { fetchSong } from '../services/api';

function ValidSong({ song }) {
  const {
    id, name, agency, artist,
  } = song;

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
      <SongInfo />
      <AlbumInfo />
      <ArtistInfo />
      <hr />
      <Link to={`/song/${id}/record`}>to RecordPage</Link>
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
      {song
        ? <ValidSong song={song} />
        : <p>fetching</p>}
    </>
  );
}
