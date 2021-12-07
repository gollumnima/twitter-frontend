import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_GRAY } = colors;

type Props = {
  shape: string;
  option: string;
  isOpen: boolean;
  onClick: () => void;
};

const Svg = styled.svg`
  fill: ${LIGHT_GRAY};
  width: 20px;
  height: 20px;
  cursor: pointer;
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
`;

export const IconButton: React.FC<Props> = ({
  shape, option, isOpen, onClick, children,
}) => (
  option === 'MENU'
    ? (
      <Container>
        <Svg onClick={onClick}>
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
      <Svg onClick={onClick}>
        <g>
          <path d={shape} />
        </g>
      </Svg>
    )
);
