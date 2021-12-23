import React from 'react';
import { useAppDispatch } from '@utils/hooksUtil';
import { Size } from '@utils/constants';
import { colors } from '~/styles/colors';
import { FlexWrapper } from '~/styles/common';
import { ActionButton } from '../button/ActionButton';
import { Avatar } from '../common/Avatar';
import { TextField } from '../common/TextField';
import { twitterAPI } from '~/utils/axios.wrapper';
import { getComments } from '~/store/comment';

type Props = {
  postId: number;
  option?: string;
  value: string;
  setValue: (value: string) => void;
};

const { WHITE } = colors;

export const CommentBox: React.FC<Props> = ({
  postId, option, value, setValue,
}) => {
  const dispatch = useAppDispatch();

  const handleComment = async () => {
    try {
      await twitterAPI.post(`/api/comments/${postId}`, {
        content: value,
      });
      setValue('');
      dispatch(getComments(postId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FlexWrapper>
      <Avatar size={Size.MEDIUM} />
      <TextField onChange={setValue} value={value} option={option} />
      <ActionButton
        title="댓글 달기"
        size={Size.SMALL}
        onSubmit={handleComment}
        fontColor={WHITE}
      />
    </FlexWrapper>
  );
};
