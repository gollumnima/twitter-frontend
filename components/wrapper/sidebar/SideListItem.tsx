import { FlexWrapper } from '@styles/common';
import * as S from './style';

interface ListItemType {
  title: string,
  path: string,
  onClick?: () => void;
}

export const SideListItem = ({ path, title, onClick }: ListItemType) => (
  <S.ListItemContainer onClick={onClick}>
    <FlexWrapper>
      <S.ListItemSvg>
        <g>
          <path
            d={path}
          />
        </g>
      </S.ListItemSvg>
      <S.ListItemSpan>{title}</S.ListItemSpan>
    </FlexWrapper>
  </S.ListItemContainer>
);
