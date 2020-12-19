import styled from '@emotion/styled';

const Item = styled.li({
  height: '2rem',
  lineHeight: '2rem',
  '& + &': {
    marginTop: '1rem',
  },
});

export default Item;
