import styled from 'styled-components';
import { styledUtil } from '@utils/styledUtil';
import { FlexWrapper } from '@styles/common';

type String = {
  primary?: boolean,
  size?: boolean
}

const Span = styled.span`
  display: block;
  font-size: 15px;
  font-weight: ${(props: String) => props.primary ? 'bold': 'normal'};
  color: ${(props: String) => props.primary ? '#fff': '#6E767D'};
`

const Image = styled.img`
  border-radius: 50%;
`

type ProfileInfo = {
  src: string,
  name: string,
  account: string,
  // buttonType: "more",
  size: "small"
}

export const Profile = ({ src, name, account, size }: ProfileInfo) => {
  return (
    <FlexWrapper>
      <Image 
        src={src} 
        alt={`${account}'s profile image`} 
        style={{
          width: `${size === "small" ? "40px" : "48px"}`, 
          height: `${size === "small" ? "40px" : "48px"}` 
        }}
      />
      <div>
        <Span primary>{name}</Span>
        <Span>{account}</Span>
      </div>
    </FlexWrapper>
  )
}