import styled from 'styled-components';
import { colors } from '@styles/colors';

const {
  LIGHT_GRAY, LINE_GRAY, HOVER_BLACK,
} = colors;

export const Nav = styled.nav`
position: fixed;
min-width: 275px;
height: 100vh;
border-right: 1px solid ${LINE_GRAY};
`;

export const Ul = styled.ul`
display: flex;
flex-direction: column;
flex-basis: auto;
align-items: flex-start;
`;

export const Svg = styled.svg`
width: 50px;
height: 50px;
fill: ${LIGHT_GRAY};
padding: 12px 0 0 12px;

cursor: pointer;
`;

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
margin: 20px 0;
`;

export const ListItemContainer = styled.div`
  padding: 12px;

  &:hover {
    cursor: pointer;
    background-color: ${HOVER_BLACK};
    border-radius: 9999px;
  }
`;

export const ListItemSvg = styled.svg`
  width: 26.25px;
  height: 26.25px;
  font-size: 15px;
  fill: ${LIGHT_GRAY};
`;

export const ListItemSpan = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: ${LIGHT_GRAY};

  margin-left: 15px;
`;
