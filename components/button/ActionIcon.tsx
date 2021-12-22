import { FlexWrapper } from '@styles/common';
import * as S from './style';

type IconProps = {
  number?: number,
  path: string
  onClick?: (e:React.MouseEvent) => void;
};

export const ActionIcon = ({ number, path, onClick }: IconProps) => (
  <FlexWrapper>
    <S.Svg onClick={onClick}>
      <g>
        <path d={path} />
      </g>
    </S.Svg>
    {
      number
        && (
          <S.Span>{number}</S.Span>
        )
    }
  </FlexWrapper>
);
