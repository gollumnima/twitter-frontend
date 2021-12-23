import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@utils/hooksUtil';
import { getPost } from '@store/post';
import * as postAction from '@store/post';
import moment from 'moment';
import { FlexWrapper } from '@styles/common';
import { Avatar } from '@components/common/Avatar';
import { IconButton } from '@components/button/IconButton';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';
import { CommentBox } from '../comment';
import { Wrapper } from '../wrapper';
import * as S from './style';
import { findUser } from '~/store/user';
import { ActionIcon } from '../button/ActionIcon';
import { CommentThread } from '../comment/CommentThread';
import { deleteComment, getComments } from '~/store/comment';

const {
  LIGHT_GRAY, LIGHT_GREEN, LIGHT_BLUE, LIGHT_RED,
} = colors;

export const PostDetail: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const postId = +router.asPath.split('/')[4];
  const post = useAppSelector((state) => state.post.post);
  const comments = useAppSelector((state) => state.comment.commentList);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const authorUserNickName = useAppSelector((state) => state.user.foundUser?.name ?? '');

  const authorId = post?.user_id;
  const authorUserName = post?.User.username;

  const [isOpen, setIsOpen] = useState(false);

  const loggedId = userInfo?.id;
  const isLikedPost = post?.Likes.some((like) => like.user_id === loggedId);

  const handleLikePost = () => {
    if (typeof postId !== 'number') return null;
    return (isLikedPost
      ? dispatch(postAction.unlikePost(postId))
      : dispatch(postAction.likePost(postId)));
  };

  const handleDeletePost = () => {
    if (typeof postId !== 'number') return;
    dispatch(postAction.deletePost(postId));
  };

  const iconList = [
    {
      key: 'comment',
      shape: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
      count: comments.length ?? 0,
      color: LIGHT_BLUE,
      onClick: () => router.push(`/user/${authorUserName}/status/${postId}`),
    },
    {
      key: 'retweet',
      shape: 'M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z',
      count: 0,
      color: LIGHT_GREEN,
      onClick: () => { },
    },
    {
      key: 'like',
      shape: 'M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z',
      count: post?.Likes.length ?? 0,
      color: LIGHT_RED,
      onClick: handleLikePost,
    },
  ];

  const handleDeleteComment = () => {
    dispatch(deleteComment(postId));
    dispatch(getComments(postId));
  };

  useEffect(() => {
    if (typeof postId !== 'number' || typeof authorUserName !== 'string') return;
    dispatch(getPost(postId));
    dispatch(findUser(authorUserName));
  }, [dispatch, postId, authorUserName]);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [postId]);

  if (!post) return null;

  return (
    <FlexWrapper>
      <Wrapper>
        <S.InnerWrapper>
          <S.FixedContainer>
            <FlexWrapper>
              &nbsp;&nbsp;&nbsp;
              <ActionIcon
                path="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                onClick={() => router.push('/')}
              />
              &nbsp;&nbsp;&nbsp;
              <S.Title>트윗</S.Title>
            </FlexWrapper>
          </S.FixedContainer>
          <S.Container onClick={() => router.push(`/user/${authorUserName}/status/${postId}`)}>
            <S.PostContainer>
              <Avatar
                src={post.User.image_url}
                size={Size.MEDIUM}
                onClick={() => router.push(`/user/${authorUserName}`)}
              />
              <S.ContentWrapper>
                <S.TitleWrapper>
                  <FlexWrapper>
                    <S.Span
                      primary="true"
                      title="true"
                      underline="true"
                      onClick={() => router.push(`/user/${authorUserName}`)}
                    >
                      {authorUserNickName}
                    </S.Span>
                    <S.Span>{`@${authorUserName} ·`}</S.Span>
                    <S.Span>{moment(post.created_at).fromNow()}</S.Span>
                  </FlexWrapper>

                  <IconButton
                    option="MENU"
                    shape="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                  >
                    {
                userInfo?.id === authorId
                && <S.MenuItem onClick={handleDeletePost}>이 트윗 삭제하기</S.MenuItem>
              }
                    <S.MenuItem onClick={handleLikePost}>
                      {
                  isLikedPost ? '좋아요 취소하기' : '좋아요 하기'
                }
                    </S.MenuItem>
                  </IconButton>
                </S.TitleWrapper>
                <S.Span primary="true">{post.content}</S.Span>
                {
            post.images.length > 0
            && (
              <S.Image
                src={post.images[0].url}
                onClick={() => { }}
              />
            )
          }
              </S.ContentWrapper>
            </S.PostContainer>
            <S.IconWrapper>
              {
          iconList.map((icon) => (
            <S.IconInnerWrapper key={icon.key}>
              <IconButton
                shape={icon.shape}
                color={icon.color}
                onClick={icon.onClick}
                activatedColor={icon.count > 0 ? icon.color : LIGHT_GRAY}
              />
              <S.IconText
                activatedColor={icon.count > 0 ? icon.color : LIGHT_GRAY}
              >
                {icon.count}
              </S.IconText>
            </S.IconInnerWrapper>
          ))
        }
            </S.IconWrapper>
          </S.Container>
          <S.CommentBoxWrapper>
            <CommentBox postId={postId} option="comment" />
          </S.CommentBoxWrapper>
          {
            comments?.map((comment) => (
              <CommentThread
                key={comment.id}
                comment={comment}
                post={post}
                handleDeleteComment={handleDeleteComment}
              />
            ))
          }
        </S.InnerWrapper>
      </Wrapper>
    </FlexWrapper>
  );
};
