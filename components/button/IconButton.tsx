import styled from 'styled-components';
import { colors } from '@styles/colors';
import React from 'react';

const { LIGHT_GRAY } = colors;

type Props = {
  shape: string;
  option?: string;
  isOpen?: boolean;
  onClick: (e: React.MouseEvent) => void;
  color?: string;
  activatedColor?: string;
};

const Svg = styled.svg<{ activatedColor?: string, color?: string }>`
  fill: ${(props) => props.activatedColor || LIGHT_GRAY};
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.color || LIGHT_GRAY};
  }
`;

const Ul = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 152px;
  right: 22px;
`;

const Container = styled.div`
  position: relative;
  z-indedx: 9;
`;

export const IconButton: React.FC<Props> = ({
  shape, option, isOpen, onClick, children, color, activatedColor,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };
  return (
    option === 'MENU'
      ? (
        <Container>
          <Svg onClick={handleClick}>
            <g>
              <path d={shape} />
            </g>
          </Svg>
          {isOpen
          && (
            <Ul>
              {children}
            </Ul>
          )}
        </Container>
      )
      : (
        <Svg
          viewBox="0 0 24 24"
          onClick={handleClick}
          color={color}
          activatedColor={activatedColor}
        >
          <g>
            <path d={shape} />
          </g>
        </Svg>
      )
  );
};
