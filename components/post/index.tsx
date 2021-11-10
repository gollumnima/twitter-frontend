import { FlexWrapper } from '@styles/common'
import styled, { DefaultTheme } from 'styled-components'

type String = {
  primary?: boolean,
}

const Span = styled.span`
  display: block;
  color: ${(props: String) => props.primary ? "#fff" : "#BDBDBD" };
  /* color: ${(props: String) => props.primary ? props.theme.color.primary : props.theme.color.sub } */
`

type PostProps<T, N> = {
  profileSrc: T,
  name: T,
  account: T,
  timestamp: N,
  contents: T,
  contentsSrc: T[] 
}

export const Post = ({ profileSrc, name, account, timestamp, contents, contentsSrc }: PostProps<string, number>) => {
  return (
    <FlexWrapper>
      <img src={profileSrc} />
      <div>
        <FlexWrapper>
          <Span primary>{name}</Span>
          <Span>{account}</Span>
          <Span>{timestamp}</Span>
        </FlexWrapper>
        <Span>{contents}</Span>
        {
          !!contentsSrc && contentsSrc.length > 0 &&
          contentsSrc.map(src => (
            <img src={src} />
          ))
        }
      </div>
    </FlexWrapper>
  )
}