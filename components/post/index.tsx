import { useEffect, useState } from 'react';
import { Avatar } from '@components/common/Avatar';
import { FlexWrapper } from '@styles/common';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '@styles/colors';
import { IconButton } from '@components/button/IconButton';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getSelf } from '@store/user';
import { deletePost } from '@store/post';

const {
  LINE_GRAY, GRAY, LIGHT_GRAY, BLACK, WHITE,
} = colors;

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

const MenuItem = styled.li`
  /* position: absolute; */
  /* top: 15px; */
  padding: 10px 10px;
  background-color: ${BLACK};
  color: ${WHITE};
  border: 1px solid ${LINE_GRAY};
  cursor: pointer;
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
  postId, profileSrc, name, account, timestamp, contents, contentsSrc,
}: PostProps<string, number>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

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
              <Span>{moment(timestamp, 'YYYYMMDD').fromNow()}</Span>
            </FlexWrapper>
            {
              userInfo.name === name
              && (
                <IconButton
                  option="MENU"
                  shape="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"
                  onClick={() => setIsOpen(!isOpen)}
                  isOpen={isOpen}
                >
                  <MenuItem onClick={() => dispatch(deletePost(postId))}>이 트윗 삭제하기</MenuItem>
                  <MenuItem>이 트윗 좋아요 하기</MenuItem>
                </IconButton>
              )
            }
            {/* {
              isOpen
              && (
                <div style={{
                  border: '1px solid yellow', width: '400px', height: '300px', position: 'absolute',
                }}
                >
                  <span>TEST</span>
                </div>
              )
            } */}
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
