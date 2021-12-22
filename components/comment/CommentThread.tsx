import { useState, useEffect } from 'react';
import router from 'next/router';
import moment from 'moment';
import * as S from '@components/post/style';
import { FlexWrapper } from '~/styles/common';
import { Size } from '~/utils/constants';
import { IconButton } from '../button/IconButton';
import { Avatar } from '../common/Avatar';
import * as TPost from '~/types/post';
import * as TComment from '~/types/comment';
import { useAppDispatch, useAppSelector } from '~/utils/hooksUtil';
import { findUser } from '~/store/user';

interface IcommentEntity {
  comment: TComment.ICommentEntity
}

type Props = {
  comment: IcommentEntity,
  post: TPost.GetPostResponse,
  handleDeleteComment: (e: MouseEvent) => void,
};

export const CommentThread: React.FC<Props> = ({ comment, post, handleDeleteComment }) => {
  const dispatch = useAppDispatch();
  const authorUserName = comment.User.username;
  const commentedAuthorId = comment.user_id;
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const foundUser = useAppSelector((state) => state.user.foundUser);

  const authorUserNickName = foundUser?.name ?? '';
  const loggedId = userInfo?.id;

  const [isOpen, setIsOpen] = useState(false); 7;

  useEffect(() => {
    if (!comment) return;
    dispatch(findUser(comment?.User.username));
  }, []);

  console.log(comment, 'CO');
  if (!userInfo) return null;

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
                {authorUserNickName}
              </S.Span>
              <S.Span>{`@${authorUserName} ·`}</S.Span>
              <S.Span>{moment(comment.created_at, 'YYYYMMDD').fromNow()}</S.Span>
            </FlexWrapper>
            <IconButton
              option="MENU"
              shape="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
            >
              {
                commentedAuthorId === loggedId
                && <S.MenuItem onClick={handleDeleteComment}>댓글 삭제하기</S.MenuItem>
              }
            </IconButton>
          </S.TitleWrapper>
          <S.Span>
            <S.Blue>
              {`@${authorUserName}` }
              &nbsp;
            </S.Blue>
            님에게 보내는 댓글
          </S.Span>
          <br />
          <S.Span primary="true">{comment.content}</S.Span>
        </S.ContentWrapper>
      </S.PostContainer>
      <br />
    </S.Container>
  );
};
