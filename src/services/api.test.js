import {
  fetchAgencies,
  fetchArtists,
  fetchSongs,
  fetchSong,
  postLogin,
  postVoice,
  postVideo,
} from './api';

import AGENCIES from '../../fixtures/agencies';
import ARTISTS from '../../fixtures/artists';
import SONGS from '../../fixtures/songs';
import SONG from '../../fixtures/song';
import ACCESS_TOKEN from '../../fixtures/access-token';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchAgencies', () => {
    beforeEach(() => {
      mockFetch(AGENCIES);
    });

    it('returns agencies', async () => {
      const agencies = await fetchAgencies();

      expect(agencies).toEqual(AGENCIES);
    });
  });

  describe('fetchArtists', () => {
    const agencyName = 'SM';
    const filteredArtists = ARTISTS.filter((artist) => artist.agency === agencyName);

    beforeEach(() => {
      mockFetch(ARTISTS);
    });

    it('returns artists', async () => {
      const artists = await fetchArtists({ agencyName });

      expect(artists).toEqual(filteredArtists);
    });
  });

  describe('fetchSongs', () => {
    const artistName = 'TAEMIN';
    const filteredSongs = SONGS.filter((song) => song.artist === artistName);

    beforeEach(() => {
      mockFetch(SONGS);
    });

    it('returns songs', async () => {
      const songs = await fetchSongs({ artistName });

      expect(songs).toEqual(filteredSongs);
    });
  });

  describe('fetchSong', () => {
    beforeEach(() => {
      mockFetch(SONG);
    });

    it('returns song', async () => {
      const song = await fetchSong({ songId: 1 });

      expect(song).toEqual(SONG);
    });
  });

  describe('postLogin', () => {
    beforeEach(() => {
      mockFetch({ accessToken: ACCESS_TOKEN });
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({
        email: 'tester@example.com',
        password: '1234',
      });

      expect(accessToken).toEqual(ACCESS_TOKEN);
    });
  });

  /*
  describe('postVoice')
  describe('postVideo', () => {
    beforeEach(() => {
      mockFetch({ accessToken: ACCESS_TOKEN });
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({
        email: 'tester@example.com',
        password: '1234',
      });

      expect(accessToken).toEqual(ACCESS_TOKEN);
    });
  });
  */
});
