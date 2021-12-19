import styled from 'styled-components';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';

const { SMALL, MEDIUM, LARGE } = SIZE;
const { LIGHT_GRAY, WHITE, LIGHT_BLUE } = colors;

export const Wrapper = styled.div`
  padding-left: 25px; 
`;

export const Span = styled.span<{
  size: 'LARGE' | 'MEDIUM' | 'SMALL'
}>`
  display: block;
  margin-top: ${(props) => (props.size === MEDIUM ? '20px' : '')} ;
  font-size: ${(props) => (props.size === MEDIUM ? '20px' : '30px')} ;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

export const Blue = styled.span`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${LIGHT_BLUE};
  cursor: pointer;
`;