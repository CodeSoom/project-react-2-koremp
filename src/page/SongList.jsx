import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import Agencies from '../container/Agencies';
import Artists from '../container/Artists';
import Songs from '../container/Songs';

import {
  loadAgencies,
} from '../slice';

import DivideContainer from '../../styled/DivideContainer';

const SongListPage = styled.div({

});

const ListContainer = styled.div({
  display: 'flex',
});

export default function SongList() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAgencies());
  });

  function handleClickSong(song) {
    const url = `/song/${song.id}`;
    history.push(url);
  }

  return (
    <SongListPage>
      <h2>소속사, 가수, 노래를 차례대로 선택하세요.</h2>
      <ListContainer>
        <DivideContainer>
          <p>소속사</p>
          <Agencies />
        </DivideContainer>
        <DivideContainer>
          <p>가수</p>
          <Artists />
        </DivideContainer>
        <DivideContainer>
          <p>노래</p>
          <Songs onClickSong={handleClickSong} />
        </DivideContainer>
      </ListContainer>
    </SongListPage>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  );
}
