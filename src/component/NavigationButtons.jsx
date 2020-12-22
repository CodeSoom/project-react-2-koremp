import React from 'react';

import styled from '@emotion/styled';

const ButtonsWrapper = styled.div({
  flexDirection: 'column',
});

const AboutButton = styled.button({

});

const SelectSongButton = styled.button({

});

export default function NavigationButtons({
  onClickAbout,
  onClickSelectSong,
}) {
  return (
    <ButtonsWrapper>
      <AboutButton onClick={onClickAbout}>About</AboutButton>
      <SelectSongButton onClick={onClickSelectSong}>Select Song</SelectSongButton>
    </ButtonsWrapper>
  );
}
