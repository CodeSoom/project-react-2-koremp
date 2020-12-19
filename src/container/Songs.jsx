import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

import List from '../../styled/List';
import Item from '../../styled/Item';
import Button from '../../styled/Button';

export default function Songs({ onClickSong }) {
  const songs = useSelector(get('songs'));

  function handleClick(song) {
    return (event) => {
      event.preventDefault();
      onClickSong(song);
    };
  }

  return (
    <List>
      {songs.map((song) => (
        <Item key={song.id}>
          <Button href={`/song/${song.id}`} onClick={handleClick(song)}>
            {song.name}
          </Button>
        </Item>
      ))}
    </List>
  );
}
