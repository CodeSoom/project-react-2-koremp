export async function fetchAgencies() {
  return [];
}

export async function fetchArtists() {
  return [];
}

export async function fetchSongs() {
  return [];
}

export async function fetchsong() {
  return {};
}

export async function postLogin() {
  return {};
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
