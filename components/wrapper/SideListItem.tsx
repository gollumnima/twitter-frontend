import styled from 'styled-components';
import { FlexWrapper } from '@styles/common';
import { colors } from '@styles/colors';

const { LIGHT_GRAY, HOVER_BLACK, BLING } = colors;

interface ListItemType {
  id ?: number,
  title: string,
  path: string
}

const ListItemContainer = styled.div`
  padding: 12px;

  &:hover {
    cursor: pointer;
    background-color: ${HOVER_BLACK};
    border-radius: 9999px;
  }
`;

const Svg = styled.svg`
  width: 26.25px;
  height: 26.25px;
  font-size: 15px;
  fill: ${LIGHT_GRAY};
`;

const Span = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: ${LIGHT_GRAY};

  margin-left: 15px;
`;

export const SideListItem = ({ path, title }: ListItemType) => (
  <ListItemContainer>
    <FlexWrapper>
      <Svg>
        <g>
          <path
            d={path}
          />
        </g>
      </Svg>
      <Span>{title}</Span>
    </FlexWrapper>
  </ListItemContainer>
);
