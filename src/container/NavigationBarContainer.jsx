import React from 'react';

import { useDispatch } from 'react-redux';

import NavigationButtons from '../component/NavigationButtons';
import Home from '../component/Home';
import NavigationBarLayout from '../styles/NavigationBarLayout';

export default function NavigationBar({
  handleClickLink,
}) {
  function handleClickHome() {
    handleClickLink('/');
  }

  function handleClickAbout() {
    handleClickLink('/about');
  }

  function handleClickSelectSong() {
    handleClickLink('/select-song');
  }

  return (
    <NavigationBarLayout>
      <NavigationButtons
        onClickHome={handleClickHome}
        onClickAbout={handleClickAbout}
        onClickSelectSong={handleClickSelectSong}
      />
    </NavigationBarLayout>
  );
}
