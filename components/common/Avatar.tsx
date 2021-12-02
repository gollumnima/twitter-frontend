import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LINE_GRAY } = colors;

type String = {
  src: string,
  size: string
};

const Image = styled.img`
  border: 1px solid ${LINE_GRAY};
  border-radius: 50%;
`;

export const Avatar = ({ src, size }: String) => (
  <Image
    src={src ?? 'https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png'}
    alt="profile image"
    style={{
      width: `${size === 'small' ? '40px' : '48px'}`,
      height: `${size === 'small' ? '40px' : '48px'}`,
    }}
  />
);
