import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LINE_GRAY, LIGHT_GRAY, WHITE } = colors;

export const Container = styled.div`
  width: 500px;
  height: 100vh;
`;

export const Span = styled.span`
  color: ${LIGHT_GRAY};
  font-size: ${(props): string => (props.title ? '20px' : '14px')};
  font-weight: ${(props): string => (props.title ? '700' : '400')};
`;

export const RightSideBar = styled.div`
  width: 350px;
  height: 100vh;
  border-left: 1px solid ${LINE_GRAY};
`;
