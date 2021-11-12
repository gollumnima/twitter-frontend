import styled from 'styled-components';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';

const {
  WHITE, LIGHT_BLUE, LIGHT_GRAY, BLACK,
} = colors;
const { SMALL, MEDIUM, LARGE } = SIZE;

type String = {
  size?: string,
  title?: string,
  fontColor?: string
}

const Button = styled.button<{size: string}>`
all: unset;
text-align: center;
padding: 16px 16px;
border-radius: 30px;

cursor: pointer;

${({ size }) => {
    if (size === SMALL) {
      return 'width: 70px';
    }
    if (size === MEDIUM) {
      return 'width: 85px';
    }
    if (size === LARGE) {
      return 'width: 225px';
    }
  }}

`;

const Span = styled.span`
  font-size: 17px;
  font-weight: 700;

  ${({ fontColor }) => {
    if (fontColor === WHITE) {
      return `color: ${WHITE}`;
    }
    return `color: ${BLACK}`;
  }}
`;

export const ActionButton = ({ size, title, fontColor }:String) => (
  <Button
    size={size}
    style={{ backgroundColor: fontColor === WHITE ? LIGHT_BLUE : LIGHT_GRAY }}
  >
    <Span fontColor={fontColor}>{title}</Span>
  </Button>
);
