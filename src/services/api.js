export async function fetchAgencies() {
  const url = 'http://localhost:3000/agency';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchArtists({ agencyName }) {
  const url = 'http://localhost:3000/artist'
    + `?agency=${agencyName}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchSongs({ artistName }) {
  const url = 'http://localhost:3000/song'
    + `?artist=${artistName}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchSong({ songId }) {
  const url = 'http://localhost:3000/song'
    + `?id=${songId}`;
  const response = await fetch(url);
  const data = await response.json();
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
