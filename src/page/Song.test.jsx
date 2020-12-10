import React from 'react';

import { render } from '@testing-library/react';

import Song from './Song';

describe('Song', () => {
  context('when loading', () => {
    const match = {
      params: {
        id: 1,
      },
    };

    it('renders loading text', () => {
      const { getByText } = render(<Song match={match} />);

      expect(getByText(/loading/)).not.toBeNull();
    });
  });

  context('when finish loading', () => {
    context('when song is valid', () => {
      const match = {
        params: {
          id: 1,
        },
      };

      it('renders SongDetail', () => {
        const { getByText } = render(<Song match={match} />);
      });
    });

    context('when song is unvalid', () => {
      const match = {
        params: {
          id: 21,
        },
      };

      it('renders unvalid song id text', () => {
        const { getByText } = render(<Song match={match} />);

        expect(getByText(/unvalid song id/)).not.toBeNull();
      });
    });
  });
});
