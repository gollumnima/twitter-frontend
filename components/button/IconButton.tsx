import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_GRAY } = colors;

type Props = {
  shape: string;
  onClick: () => void;
};

const Svg = styled.svg`
  fill: ${LIGHT_GRAY};
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const IconButton = ({ shape, onClick }: Props) => (
  <Svg onClick={onClick}>
    <g>
      <path d={shape} />
    </g>
  </Svg>
);
