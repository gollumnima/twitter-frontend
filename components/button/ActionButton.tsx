import React from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';

const {
  WHITE, LIGHT_BLUE, LIGHT_GRAY, BLACK,
} = colors;
// const { SMALL, MEDIUM, LARGE } = SIZE;

type Props = {
  size?: Size;
  title?: string;
  fontColor?: string;
  onSubmit: (e: React.MouseEvent) => void;
};

const Button = styled.button<{ size: string }>`
all: unset;
text-align: center;
padding: 16px 16px;
border-radius: 30px;

cursor: pointer;

${({ size }) => {
    if (size === Size.SMALL) {
      return 'width: 70px';
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

const Span = styled.span<{ size: Size }>`
  font-size: 17px;
  font-weight: 700;

  font-size: ${({ size }) => ({ [Size.SMALL]: 10, [Size.MEDIUM]: 15, [Size.LARGE]: 20 }[size])}px;
  /* width: ${({ size }) => ({ [Size.SMALL]: 10, [Size.MEDIUM]: 15, [Size.LARGE]: 20 }[size])}px; */
`;

// ${({ size }) => {
//   if (size === SMALL) return 'font-size: 10px';
//   if (size === MEDIUM) return 'font-size: 15px';
//   return 'font-size: 17px';
// }
// }
// ${({ fontColor }) => {
//   if (fontColor === WHITE) {
//     return `color: ${WHITE}`;
//   }
//   return `color: ${BLACK}`;
// }}

export const ActionButton = ({
  size = Size.SMALL, title, fontColor, onSubmit,
}: Props) => (
  <Button
    size={size}
    style={{ backgroundColor: fontColor === WHITE ? LIGHT_BLUE : LIGHT_GRAY }}
    onClick={onSubmit}
  >
    <Span
      size={size}
      style={{ color: fontColor === WHITE ? WHITE : BLACK }}
    >
      {title}

    </Span>
  </Button>
);
