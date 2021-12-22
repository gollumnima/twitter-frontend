import styled from 'styled-components';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';

const {
  WHITE, LIGHT_BLUE, LIGHT_GRAY, BLACK,
} = colors;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${LIGHT_GRAY};
  cursor: pointer;
`;
export const Span = styled.span`
  font-size: 13px;
  color: ${LIGHT_GRAY};
  padding: 0 12px;
`;

export const AButton = styled.button<{ size: string, fontColor: string }>`
all: unset;
text-align: center;
padding: 16px 16px;
border-radius: 30px;
background-color: ${(props) => (props.fontColor === WHITE ? LIGHT_BLUE : LIGHT_GRAY)};

cursor: pointer;

${({ size }) => {
    if (size === Size.SMALL) {
      return 'width: 55px';
    }
    if (size === Size.MEDIUM) {
      return 'width: 85px';
    }
    if (size === Size.LARGE) {
      return 'width: 225px';
    }
    return '';
  }}

`;

export const ASpan = styled.span<{ size: Size, fontColor: string }>`
  font-size: 17px;
  font-weight: 700;

  font-size: ${({ size }) => ({ [Size.SMALL]: 13, [Size.MEDIUM]: 15, [Size.LARGE]: 20 }[size])}px;
  color: ${(props) => (props.fontColor === WHITE ? WHITE : BLACK)};
`;
