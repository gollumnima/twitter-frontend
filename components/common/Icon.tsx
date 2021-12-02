import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_BLUE } = colors;

type String = {
  path: string;
  onFileChange?: () => void;
};

const Svg = styled.svg`
  fill: ${LIGHT_BLUE}; 
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const Icon = ({ path, onFileChange }: String) => (
  onFileChange
    ? (
      <>
        <input type="file" onChange={onFileChange} />
        <Svg>
          <g>
            <path d={path} />
          </g>
        </Svg>
      </>
    )
    : (
      <Svg>
        <g>
          <path d={path} />
        </g>
      </Svg>
    )

);
