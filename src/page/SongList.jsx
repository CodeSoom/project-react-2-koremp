import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Agencies from '../container/Agencies';
import Artists from '../container/Artists';
import Songs from '../container/Songs';

import {
  loadAgencies,
} from '../slice';

export default function SongList() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAgencies());
  });

  function handleClickSong(song) {
    const url = `/song/${song.id}`;
    history.push(url);
  }

  return (
    <div>
      <h2>Choose Agency, Artist, and Song.</h2>
      <Agencies />
      <Artists />
      <Songs onClickSong={handleClickSong} />
    </div>
  );
}
