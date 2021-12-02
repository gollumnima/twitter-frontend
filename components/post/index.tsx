import { Avatar } from '@components/common/Avatar';
import { FlexWrapper } from '@styles/common';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '@styles/colors';
import { IconButton } from '@components/button/IconButton';

const { LINE_GRAY, GRAY, LIGHT_GRAY } = colors;

type String = {
  primary?: boolean,
};

const Container = styled.article`
  border-bottom: 1px solid ${LINE_GRAY};

  padding: 10px 10px;
`;

const Span = styled.span`
  display: block;
  color: ${(props: String) => (props.primary ? LIGHT_GRAY : GRAY)};
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`;

type PostProps<T, N> = {
  profileSrc: T,
  name: T,
  account: T,
  timestamp: N,
  contents: T,
  contentsSrc: T[]
};

export const Post = ({
  profileSrc, name, account, timestamp, contents, contentsSrc,
}: PostProps<string, number>) => (
  <Container>
    <FlexWrapper>
      <Avatar
        src={profileSrc}
        size="large"
      />
      <ContentWrapper>
        <TitleWrapper>
          <FlexWrapper>
            <Span primary>{name}</Span>
            <Span>{account}</Span>
            <Span>{timestamp}</Span>
          </FlexWrapper>
          <IconButton
            shape="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"
          />
        </TitleWrapper>

        <Span primary>{contents}</Span>
        {
          !!contentsSrc && contentsSrc.length > 0
          && contentsSrc.map((src) => (
            <img src={src} />
          ))
        }
      </ContentWrapper>
    </FlexWrapper>
  </Container>

);
