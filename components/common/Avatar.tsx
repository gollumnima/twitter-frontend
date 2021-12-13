import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LINE_GRAY } = colors;

type Props = {
  src: string;
  size: string;
  onClick?: () => void;
};

type StyledProps = {
  isClickable: boolean;
};

const Image = styled.img`
  border: 1px solid ${LINE_GRAY};
  border-radius: 50%;
  
  cursor: ${(props: StyledProps) => (props.isClickable ? 'pointer' : 'initial')}
`;

export const Avatar = ({ src, size, onClick }: Props) => (
  <Image
    src={src ?? 'https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png'}
    alt="profile image"
    style={{
      width: `${size === 'small' ? '40px' : '48px'}`,
      height: `${size === 'small' ? '40px' : '48px'}`,
    }}
    onClick={onClick}
    isClickable={!!onClick}
  />
);
