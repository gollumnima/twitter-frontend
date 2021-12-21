import styled from 'styled-components';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';

const { LIGHT_GRAY, LIGHT_BLUE } = colors;

export const Wrapper = styled.div`
  padding-left: 25px; 
`;

export const Span = styled.span<{
  size: Size
}>`
  display: block;
  margin-top: ${(props) => (props.size === Size.MEDIUM ? '20px' : '')} ;
  font-size: ${(props) => (props.size === Size.MEDIUM ? '20px' : '30px')} ;
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
