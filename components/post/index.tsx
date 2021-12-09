import React, { useEffect, useState } from 'react';
import { Avatar } from '@components/common/Avatar';
import { FlexWrapper } from '@styles/common';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '@styles/colors';
import { IconButton } from '@components/button/IconButton';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import * as postAction from '@store/post';

const {
  LINE_GRAY, GRAY, LIGHT_GRAY, BLACK, WHITE, LIGHT_GREEN, LIGHT_BLUE, LIGHT_RED,
} = colors;

type String = {
  primary?: boolean;
  title?: boolean;
};

const Container = styled.article`
  border-bottom: 1px solid ${LINE_GRAY};
  padding: 10px 10px;
`;

const Span = styled.span`
  display: block;
  color: ${(props: String) => (props.primary ? LIGHT_GRAY : GRAY)};
  font-weight: ${(props: String) => (props.title ? 600 : 400)};
  margin-right: 10px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-left: 14px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const IconInnerWrapper = styled.div`
  display: flex;
  max-width: 50px;
  width: 100%;
  justify-content: space-evenly;
`;

const IconText = styled.span`
  padding-top: 4px;
  font-size: 15px;
  color: ${(props) => props.activatedColor};
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
  padding: 10px 10px;
  background-color: ${BLACK};
  color: ${WHITE};
  border: 1px solid ${LINE_GRAY};
  cursor: pointer;
`;

type PostProps<T, N> = {
  postId: N,
  userId: N,
  profileSrc: T,
  name: T,
  account: T,
  timestamp: N,
  contents: T,
  contentsSrc: T[],
  likes: T[],
};

export const Post = ({
  postId, userId, profileSrc, name, account, timestamp, contents, contentsSrc, likes,
}: PostProps<string, number>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLikedPost = likes.filter((item) => item.user_id === userId).length;

  const handleLikePost = () => (isLikedPost
    ? dispatch(postAction.unlikePost(postId))
    : dispatch(postAction.likePost(postId)));

  const handleDeletePost = () => {
    dispatch(postAction.deletePost(postId));
  };

  const iconList = [
    {
      shape: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
      count: 0,
      color: LIGHT_BLUE,
      onClick: () => { },
    },
    {
      shape: 'M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z',
      count: 0,
      color: LIGHT_GREEN,
      onClick: () => { },
    },
    {
      shape: 'M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z',
      count: likes.length,
      color: LIGHT_RED,
      onClick: handleLikePost,
    },
  ];
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
                  <MenuItem onClick={handleDeletePost}>이 트윗 삭제하기</MenuItem>
                  <MenuItem onClick={handleLikePost}>
                    {
                      isLikedPost ? '좋아요 취소하기' : '좋아요 하기'
                    }
                  </MenuItem>
                </IconButton>
              )
            }
          </TitleWrapper>
          <Span primary>{contents}</Span>
          {
            contentsSrc.length > 0
            && (
              <Image
                src={contentsSrc[0].url}
                onClick={() => {

                }}
              />
            )
          }

        </ContentWrapper>
      </PostContainer>
      <IconWrapper>
        {
          iconList.map((el) => (
            <IconInnerWrapper>
              <IconButton
                shape={el.shape}
                color={el.color}
                onClick={el.onClick}
                activatedColor={el.count > 0 ? el.color : LIGHT_GRAY}
              />
              <IconText
                activatedColor={el.count > 0 ? el.color : LIGHT_GRAY}
              >
                {el.count}
              </IconText>
            </IconInnerWrapper>
          ))
        }
      </IconWrapper>
    </Container>

  );
};
