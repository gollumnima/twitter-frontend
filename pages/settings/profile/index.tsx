import { useState, useReducer } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer } from '@components/modal/ModalContainer';
import { Avatar } from '@components/common/Avatar';
import { SIZE } from '@utils/constants';
import { ShortInput } from '@components/common/ShortInput';

const { SMALL, MEDIUM, LARGE } = SIZE;

const useReducerState = (initialState = {}) => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  return useReducer(reducer, initialState);
};

const reducer = (state, action) => {
  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

export default function ProfileSetting() {
  const router = useRouter();
  const myAccount = useSelector((state) => state.user.foundUser ?? {});
  const [state, setState] = useReducerState({
    name: '',
    description: '',
  });

  const { name, description } = state;
  console.log({ name, description });
  return (
    <ModalContainer onClick={() => router.push(`/user/${myAccount.username}`)} option="FULL">
      <div>
        <Avatar
          src={myAccount.image_url}
          size={LARGE}
          onClick={() => { }}
        />
        <ShortInput
          setValue={setState}
          value={name}
          title="이름"
        />
        <ShortInput
          setValue={setState}
          value={description}
          title="자기소개"
        />
      </div>
    </ModalContainer>
  );
}
