import { useRef } from 'react';
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

const UploadInput = styled.input`
  display: none;
`;

export const Icon = ({ path, onFileChange }: String) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleUploadImage = () => {
    if (!ref) return;
    ref.current.click();
  };

  return (
    onFileChange
      ? (
        <>
          <UploadInput
            type="file"
            ref={ref}
            onChange={onFileChange}
          />
          <Svg onClick={handleUploadImage}>
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
};
