import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadArtists,
  selectAgency,
} from '../slice';

import { get } from '../utils';

export default function Agencies() {
  const dispatch = useDispatch();

  const agencies = useSelector(get('agencies'));
  const selectedAgency = useSelector(get('selectedAgency'));

  function handleClick(agencyId) {
    dispatch(selectAgency(agencyId));
    dispatch(loadArtists());
  }

  return (
    <ul>
      {agencies.map((agency) => (
        <li
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
        </li>
      ))}
    </ul>
  );
}
