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

const Container = styled.div({
  display: 'flex',
  flex: '1',
});

const DivideContainer = styled.div({
  flex: '1',
  '& p': {
    fontWeight: 'bold',
  },
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
    <div>
      <h2>소속사, 가수, 노래를 차례대로 선택하세요.</h2>
      <Container>
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
      </Container>
    </div>

  );
}
