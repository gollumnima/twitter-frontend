import { FlexWrapper } from '@styles/common';
import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_GRAY } = colors;

type IconProps = {
  isActive?: false,
  number?: number,
  path: string
}

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${LIGHT_GRAY};
`;
const Span = styled.span`
  font-size: 13px;
  color: ${LIGHT_GRAY};
  padding: 0 12px;
`;

export const ActionIcon = ({ isActive, number, path }: IconProps) => (
  <FlexWrapper>
    <Svg>
      <g>
        <path d={path} />
      </g>
    </Svg>
    {
      number
        && (
          <Span>{number}</Span>
        )
    }
  </FlexWrapper>
);
