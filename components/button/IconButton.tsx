import styled from 'styled-components'
import { colors } from '@styles/colors';

const { LIGHT_GRAY } = colors;

type String = {
  shape: string;
}

const Svg = styled.svg`
  fill: ${LIGHT_GRAY};
  width: 20px;
  height: 20px;
`

export const IconButton = ({ shape }: String) => {
  return (
    <Svg>
      <g>
        <path d={shape} />
      </g>
    </Svg>
  )
}