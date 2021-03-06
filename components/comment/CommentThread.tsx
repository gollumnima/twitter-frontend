import { useState } from 'react';
import router from 'next/router';
import moment from 'moment';
import * as S from '@components/post/style';
import { FlexWrapper } from '~/styles/common';
import { Size } from '~/utils/constants';
import { IconButton } from '../button/IconButton';
import { Avatar } from '../common/Avatar';
import * as TPost from '~/types/post';
import * as TComment from '~/types/comment';
import { useAppSelector, useAppDispatch } from '~/utils/hooksUtil';
import { Editable } from './Editable';
import { updateComment } from '~/store/comment';

type Props = {
  comment: TComment.ICommentEntity,
  post: TPost.GetPostResponse,
  handleDeleteComment: () => void,
};

export const CommentThread: React.FC<Props> = ({
  comment, post, handleDeleteComment,
}) => {
  const dispatch = useAppDispatch();
  const authorUserName = post.User.name;
  const commentedAuthorId = comment.user_id;
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const loggedId = userInfo?.id;

  const [value, setValue] = useState(comment.content);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const deleteComment = () => {
    handleDeleteComment();
    setIsOpen(false);
  };

  const handleUpdateComment = () => {
    setIsOpen(false);
    setIsEditable(true);
  };

  const saveComment = () => {
    dispatch(updateComment(comment.id, post.id, value));
    setIsEditable(false);
  };

  const onCancel = () => {
    setIsEditable(false);
  };

  if (!userInfo || !comment) return null;

  return (
    <S.Container>
      <S.PostContainer>
        <Avatar
          src={post.User.image_url}
          size={Size.SMALL}
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
                {comment.User.username}
              </S.Span>
              <S.Span>{`@${authorUserName} ??`}</S.Span>
              <S.Span>{moment(comment.created_at).fromNow()}</S.Span>
            </FlexWrapper>
            {commentedAuthorId === loggedId && (
              <IconButton
                option="MENU"
                shape="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              >
                <S.MenuItem onClick={deleteComment}>?????? ????????????</S.MenuItem>
                <S.MenuItem onClick={handleUpdateComment}>?????? ????????????</S.MenuItem>
              </IconButton>
            )}
          </S.TitleWrapper>
          <S.Span>
            <S.Blue>
              {`@${authorUserName}` }
              &nbsp;
            </S.Blue>
            ????????? ????????? ??????
          </S.Span>
          <br />
          {
            isEditable ? (
              <Editable
                setValue={setValue}
                value={value}
                saveComment={saveComment}
                onCancel={onCancel}
              />
            ) : <S.Span primary="true">{comment.content}</S.Span>
          }
        </S.ContentWrapper>
      </S.PostContainer>
      <br />
    </S.Container>
  );
};
