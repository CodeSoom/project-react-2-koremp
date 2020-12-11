import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from '../utils';

import {
  loadSong,
} from '../slice';

import SongInfo from '../container/SongInfo';
import SongMusicVideo from '../container/SongMusicVideo';
import SongCheerVideo from '../container/SongCheerVideo';

export default function Song({ match }) {
  const songId = match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSong({ songId }));
  }, [songId]);

  const song = useSelector(get('song'));

  const {
    id, name, artist, agency, mvUrl, cheerUrl,
  } = song;

  return (
    <>
      {
        song
          ? (
            <>
              <SongInfo id={id} name={name} artist={artist} agency={agency} />
              <SongMusicVideo name={name} mvUrl={mvUrl} />
              <SongCheerVideo name={name} cheerUrl={cheerUrl} />
            </>
          )
          : <p>unvalid song id</p>
      }
    </>
  );
}
