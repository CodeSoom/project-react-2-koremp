import React from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import HomePage from './page/HomePage';
import SongListPage from './page/SongListPage';
import SongPage from './page/SongPage';
import NotFoundPage from './page/NotFoundPage';

import NavigationBarContainer from './container/NavigationBarContainer';

import Root from './styles/Root';

export default function App() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <Root>
      <NavigationBarContainer handleClickLink={handleClickLink} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/song" component={SongListPage} />
        <Route exact path="/song/:id" component={SongPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Root>
  );
}
