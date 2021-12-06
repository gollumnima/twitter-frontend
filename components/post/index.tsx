import { useState } from 'react';
import { Avatar } from '@components/common/Avatar';
import { FlexWrapper } from '@styles/common';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '@styles/colors';
import { IconButton } from '@components/button/IconButton';
import { ModalContainer } from '@components/modal/ModalContainer';

const { LINE_GRAY, GRAY, LIGHT_GRAY } = colors;

type String = {
  primary?: boolean,
  title?: boolean,
};

const Container = styled.article`
  border-bottom: 1px solid ${LINE_GRAY};

  padding: 10px 10px;
`;

const Span = styled.span`
  display: block;
  color: ${(props: String) => (props.primary ? LIGHT_GRAY : GRAY)};
  font-weight: ${(props: String) => (props.title ? 600 : 400)};
`;

const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-left: 14px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Image = styled.img`
  width: 490px;
  height: 200px;
  border-radius: 20px;

  margin-top: 8px;
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
}: PostProps<string, number>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <PostContainer>
        <Avatar
          src={profileSrc}
          size="large"
        />
        <ContentWrapper>
          <TitleWrapper>
            <FlexWrapper>
              <Span primary title>{name}</Span>
              <Span>{`@${account}`}</Span>
              <Span>{timestamp}</Span>
            </FlexWrapper>
            <IconButton
              shape="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"
              onClick={() => setIsOpen(!isOpen)}
            />
            {
              isOpen
              && (
                <div style={{
                  border: '1px solid yellow', width: '400px', height: '300px', position: 'absolute',
                }}
                >
                  <span>TEST</span>
                </div>
              )
            }

          </TitleWrapper>
          <Span primary>{contents}</Span>
          {
            !!contentsSrc && contentsSrc.length > 0
            && contentsSrc.map((src) => (
              <Image
                src={src.url}
              />
            ))
          }

        </ContentWrapper>
      </PostContainer>
    </Container>

  );
};
