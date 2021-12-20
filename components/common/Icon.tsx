import { useRef } from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_BLUE } = colors;

type String = {
  path: string;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const ref = useRef<HTMLInputElement | null>(null);
  const handleUploadImage = () => {
    if (!ref.current) return;
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
