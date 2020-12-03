export async function fetchAgencies() {
  const url = 'https://eatgo-customer-api.ahastudio.com/agencies';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchArtists({ agencyName }) {
  const url = 'https://eatgo-customer-api.ahastudio.com/artists'
    + `?agency=${agencyName}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchSongs({ artistName }) {
  const url = 'https://eatgo-customer-api.ahastudio.com/songs'
    + `?artist=${artistName}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchSong({ songId }) {
  const url = 'https://eatgo-customer-api.ahastudio.com/songs'
    + `/songs/${songId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postLogin({ email, password }) {
  const url = 'https://eatgo-login-api.ahastudio.com/session';
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
