import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectArtist,
  loadSongs,
} from '../slice';

import { get } from '../utils';

import List from '../../styled/List';
import Item from '../../styled/item';
import Button from '../../styled/Button';

export default function Artists() {
  const dispatch = useDispatch();

  const artists = useSelector(get('artists'));
  const selectedArtist = useSelector(get('selectedArtist'));

  function handleClick(artistId) {
    dispatch(selectArtist(artistId));
    dispatch(loadSongs());
  }

  return (
    <List>
      {artists.map((artist) => (
        <Item
          key={artist.id}
        >
          <Button
            type="button"
            onClick={() => handleClick(artist.id)}
          >
            {artist.name}
          </Button>
        </Item>
      ))}
    </List>
  );
}
