import React from 'react';
import { Size } from '@utils/constants';
import * as S from './style';

type Props = {
  size?: Size;
  title?: string;
  fontColor?: string | null;
  onSubmit: (e: React.MouseEvent) => void;
};

export const ActionButton = ({
  size = Size.SMALL, title, fontColor, onSubmit,
}: Props) => (
  <S.AButton
    size={size}
    fontColor={fontColor}
    onClick={onSubmit}
  >
    <S.ASpan
      size={size}
      fontColor={fontColor}
    >
      {title}
    </S.ASpan>
  </S.AButton>
);
