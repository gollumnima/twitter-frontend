import styled from 'styled-components';
import { FlexWrapper } from '@styles/common';
import { colors } from '@styles/colors';
import { Avatar } from './Avatar';

const { LIGHT_GRAY, GRAY } = colors;

type String = {
  primary?: boolean,
  margin?: boolean,
  size?: boolean
};

const Span = styled.span`
  display: block;
  font-size: 15px;
  font-weight: ${(props: String) => (props.primary ? 700 : 400)};
  color: ${(props: String) => (props.primary ? LIGHT_GRAY : GRAY)};
  
  margin-top: ${(props: String) => (props.margin ? '5px' : 0)};
  margin-left: 5px;
`;

type ProfileInfo = {
  src: string,
  name: string,
  account: string,
  // buttonType: "more",
  size: 'small'
};

export const ProfileCard = ({
  src, name, account, size,
}: ProfileInfo) => (
  <FlexWrapper>
    <Avatar
      src={src}
      size={size}
    />
    <div>
      <Span primary>{name}</Span>
      <Span margin>{account}</Span>
    </div>
  </FlexWrapper>
);
