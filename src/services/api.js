import agencies from '../../fixtures/agencies';
import artists from '../../fixtures/artists';
import songs from '../../fixtures/songs';

// for async func

function resolveAgencies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(agencies);
    }, 100);
  });
}

function resolveArtists({ agencyName }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(artists.filter((artist) => artist.agency === agencyName));
    }, 100);
  });
}

function resolveSongs({ artistName }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(songs.filter((song) => song.filter(song.artist === artistName)));
    }, 100);
  });
}

export async function fetchAgencies() {
  // const url = 'http://localhost:3000/agency';
  // const response = await fetch(url);
  // const data = await response.json();
  const data = await resolveAgencies();
  return data;
}

export async function fetchArtists({ agencyName }) {
  // const url = 'http://localhost:3000/artist'
  //   + `?agency=${agencyName}`;
  // const response = await fetch(url);
  // const data = await response.json();
  const data = await resolveArtists({ agencyName });
  return data;
}

export async function fetchSongs({ artistName }) {
  // const url = 'http://localhost:3000/song'
  //   + `?artist=${artistName}`;
  // const response = await fetch(url);
  // const data = await response.json();
  const data = await resolveSongs({ artistName });
  return data;
}

export async function fetchSong({ songId }) {
  // const url = 'http://localhost:3000/song'
  //   + `?id=${songId}`;
  // const response = await fetch(url);
  // const data = await response.json();
  const data = songs.filter((song) => song.id === songId);
  return data;
}

export async function postLogin({ email, password }) {
  const url = 'http://localhost:3000/session';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const { accessToken } = await response.json();
  return accessToken;
}

export async function postVideo({
  accessToken, songId, Video,
}) {
  return {
    accessToken,
    songId,
    Video,
  };
}

export async function postVoice({
  accessToken, songId, Voice,
}) {
  return {
    accessToken,
    songId,
    Voice,
  };
}
