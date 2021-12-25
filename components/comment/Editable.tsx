import React from 'react';
import { ActionButton } from '../button/ActionButton';
import { TextField } from '../common/TextField';
import { Size } from '~/utils/constants';
import { colors } from '~/styles/colors';
import { FlexWrapper } from '~/styles/common';

type Props = {
  value: string;
  setValue: (value: string) => void;
  saveComment: () => void;
  onCancel: () => void;
};

const { WHITE, BLACK } = colors;

export const Editable: React.FC<Props> = ({
  setValue, value, saveComment, onCancel,
}) => (
  <>
    <TextField onChange={setValue} value={value} />
    <FlexWrapper>
      <ActionButton
        title="취소"
        size={Size.SMALL}
        onSubmit={onCancel}
        fontColor={BLACK}
      />
      &nbsp;&nbsp;&nbsp;
      <ActionButton
        size={Size.SMALL}
        title="댓글 수정"
        onSubmit={saveComment}
        fontColor={WHITE}
      />
    </FlexWrapper>
  </>
);
