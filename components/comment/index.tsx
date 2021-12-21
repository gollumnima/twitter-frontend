import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooksUtil';
import { Size } from '@utils/constants';
import { colors } from '~/styles/colors';
import { FlexWrapper } from '~/styles/common';
import { ActionButton } from '../button/ActionButton';
import { Avatar } from '../common/Avatar';
import { TextField } from '../common/TextField';

type Props = {

};

const { WHITE } = colors;

export const CommentBox: React.FC<Props> = () => {
  const [value, setValue] = useState('');

  return (
    <FlexWrapper>
      <Avatar size={Size.MEDIUM} />
      <TextField onChange={setValue} value={value} />
      <ActionButton
        title="댓글 달기"
        size={Size.MEDIUM}
        onSubmit={() => { }}
        fontColor={WHITE}
      />
    </FlexWrapper>
  );
};
