import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadArtists,
  selectAgency,
} from '../slice';

import { get } from '../utils';

import List from '../../styled/List';
import Item from '../../styled/Item';

export default function Agencies() {
  const dispatch = useDispatch();

  const agencies = useSelector(get('agencies'));
  const selectedAgency = useSelector(get('selectedAgency'));

  function handleClick(agencyId) {
    dispatch(selectAgency(agencyId));
    dispatch(loadArtists());
  }

  return (
    <List>
      {agencies.map((agency) => (
        <Item
          key={agency.id}
        >
          <button
            type="button"
            onClick={() => handleClick(agency.id)}
          >
            {agency.name}
            {selectedAgency ? (
              <>
                {agency.id === selectedAgency.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </Item>
      ))}
    </List>
  );
}
