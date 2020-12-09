import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { loadItem } from './services/storage';

jest.mock('react-redux');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      agencies: [
        { id: 1, name: 'SM' },
      ],
      artists: [],
      songs: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home of FanCheer');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('FanCheer is online cheering service.');
    });
  });

  context('with path /songs', () => {
    it('renders the song list page', () => {
      const { container } = renderApp({ path: '/song' });

      expect(container).toHaveTextContent('Choose Agency, Artist, and Song.');
      expect(container).toHaveTextContent('SM');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 NOT FOUND');
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it("doesn't call dispatch", () => {
      renderApp({ path: '/' });

      expect(dispatch).not.toBeCalled();
    });
  });

  /*
  context('when logged in', () => {
    const accessToken = 'ACCESS_TOKEN';

    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
    });

    it('calls dispatch with “setAccessToken” action', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith({
        type: 'application/setAccessToken',
        payload: accessToken,
      });
    });
  });
  */
});
