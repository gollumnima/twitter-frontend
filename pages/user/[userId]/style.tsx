import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LINE_GRAY, LIGHT_GRAY } = colors;

export const Container = styled.div``;

export const Span = styled.span`
  color: ${LIGHT_GRAY};
`;

export const RightSideBar = styled.div`
  width: 350px;
  height: 100vh;
  border-left: 1px solid ${LINE_GRAY};
`;
