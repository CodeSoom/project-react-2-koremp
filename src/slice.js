import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAgencies,
  fetchArtists,
  fetchSongs,
  fetchSong,
  postLogin,
  postVideo,
  postVoice,
} from './services/api';

import { saveItem } from './services/storage';

import { equal } from './utils';

const initialState = {
  agencies: [],
  artists: [],
  songs: [],
  song: null,
  selectedSong: null,
  selectedAgency: null,
  selectedArtist: null,
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
};

const reducers = {
  setAgencies(state, { payload: agencies }) {
    return {
      ...state,
      agencies,
    };
  },

  setArtists(state, { payload: artists }) {
    return {
      ...state,
      artists,
    };
  },

  setSongs(state, { payload: songs }) {
    return {
      ...state,
      songs,
    };
  },

  setSong(state, { payload: song }) {
    return {
      ...state,
      song,
    };
  },

  selectAgency(state, { payload: agencyId }) {
    const { agencies } = state;
    return {
      ...state,
      selectedAgency: agencies.find(equal('id', agencyId)),
    };
  },

  selectArtist(state, { payload: artistId }) {
    const { artists } = state;
    return {
      ...state,
      selectedArtist: artists.find(equal('id', artistId)),
    };
  },

  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
    };
  },

  setAccessToken(state, { payload: accessToken }) {
    return {
      ...state,
      accessToken,
    };
  },

  logout(state) {
    return {
      ...state,
      accessToken: '',
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setAgencies,
  setArtists,
  setSongs,
  setSong,
  selectAgency,
  selectArtist,
  changeLoginField,
  setAccessToken,
  logout,
} = actions;

export default reducer;

export function loadAgencies() {
  return async (dispatch) => {
    const agencies = await fetchAgencies();
    dispatch(setAgencies(agencies));
  };
}

export function loadArtists() {
  return async (dispatch, getState) => {
    const {
      selectedAgency: agency,
    } = getState();

    if (!agency) {
      return;
    }

    const artists = await fetchArtists({
      agencyName: agency.name,
    });
    dispatch(setArtists(artists));
  };
}

export function loadSongs() {
  return async (dispatch, getState) => {
    const {
      selectedArtist: artist,
    } = getState();

    if (!artist) {
      return;
    }

    const songs = await fetchSongs({
      artistName: artist.name,
    });
    dispatch(setSongs(songs));
  };
}

export function loadSong({ songId }) {
  return async (dispatch) => {
    dispatch(setSong(null));

    const song = await fetchSong({ songId });

    dispatch(setSong(song));
  };
}

export function requestLogin() {

}
