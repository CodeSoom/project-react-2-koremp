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
    beforeEach(() => {
      mockFetch(ARTISTS);
    });

    it('returns artists', async () => {
      const artists = await fetchArtists({
        agencyName: 'SM',
      });

      expect(artists).toEqual(ARTISTS);
    });
  });

  describe('fetchSongs', () => {
    beforeEach(() => {
      mockFetch(SONGS);
    });

    it('returns songs', async () => {
      const songs = await fetchSongs({
        artistName: 'TAEMIN',
      });

      expect(songs).toEqual(SONGS);
    });
  });

  describe('fetchSong', () => {
    beforeEach(() => {
      mockFetch(SONGS);
    });

    it('returns songs', async () => {
      const songs = await fetchSong({ songId: 1 });

      expect(songs).toEqual(SONGS);
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
