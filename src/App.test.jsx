import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
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
      const { container } = renderApp({ path: '/songs' });

      expect(container).toHaveTextContent('Choose Agency, Artist, and Song.');
    });
  });
});
