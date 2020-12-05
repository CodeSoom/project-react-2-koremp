import React from 'react';

import { Link } from 'react-router-dom';

import SongInfo from '../container/SongInfo';
import AlbumInfo from '../container/AlbumInfo';
import ArtistInfo from '../container/ArtistInfo';

export default function Song({ match }) {
  const { id } = match.params;
  return (
    <div>
      <SongInfo />
      <AlbumInfo />
      <ArtistInfo />
      <hr />
      <Link to={`/song/${id}/record`}>to RecordPage</Link>
    </div>
  );
}
