import styled from 'styled-components';
import { Size } from '@utils/constants';
import { colors } from '@styles/colors';

const { BLACK, LIGHT_GRAY } = colors;

type StyledProps = {
  size?: Size;
  logo?: boolean;
};

export const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  background-color: ${BLACK};
  position: absolute;
  left: 33%;
  padding: 1em;
  width: 600px;
  border-radius: 10px;
  
  ${({ size }: StyledProps) => {
    if (size === Size.SMALL) return ({ height: '240px', top: '33%' });
    if (size === Size.MEDIUM) return ({ height: '450px', top: '23%' });
    if (size === Size.LARGE) return ({ height: '700px', top: '10%' });
    return '';
  }}
`;

export const Svg = styled.svg`
  display: block;
  width: 50px;
  height: 50px;
  fill: ${LIGHT_GRAY};
  padding: ${(props: StyledProps) => (props.logo ? '0 45%' : 0)};
  cursor: ${(props: StyledProps) => (props.logo ? 'none' : 'pointer')};
`;
