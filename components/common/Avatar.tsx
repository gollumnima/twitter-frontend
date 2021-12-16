import styled from 'styled-components';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';

const { LINE_GRAY } = colors;
const { SMALL, MEDIUM, LARGE } = SIZE;

type Props = {
  src: string;
  size: string;
  onClick?: () => void;
};

type StyledProps = {
  isClickable: boolean;
  size: string;
};

const Image = styled.img`
  border: 1px solid ${LINE_GRAY};
  border-radius: 50%;

  cursor: ${(props: StyledProps) => (props.isClickable ? 'pointer' : 'initial')};

  ${({ size }: StyledProps) => {
    if (size === SMALL) return ({ width: '40px', height: '40px' });
    if (size === MEDIUM) return ({ width: '48px', height: '48px' });
    if (size === LARGE) return ({ width: '130px', height: '130px' });
    return '';
  }}

`;

export const Avatar = ({ src, size, onClick }: Props) => (
  <Image
    src={src ?? 'https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png'}
    alt="profile image"
    size={size}
    onClick={onClick}
    isClickable={!!onClick}
  />
);
