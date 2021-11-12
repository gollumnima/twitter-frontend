import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_BLUE } = colors;

type String = {
  path: string;
}

const Svg = styled.svg`
  fill: ${LIGHT_BLUE}; 
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const Icon = ({ path }: String) => (
  <Svg>
    <g>
      <path d={path} />
    </g>
  </Svg>
);
