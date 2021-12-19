import React, { ChangeEvent, useReducer } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useReducerState } from '@utils/hooksUtil';
import { ModalContainer } from '@components/modal/ModalContainer';
import { ActionButton } from '@components/button/ActionButton';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';
import styled from 'styled-components';
import { getToken, login } from '@store/user';
import { ShortInput } from '@components/common/ShortInput';
import * as S from './styles';

// const { SMALL, MEDIUM, LARGE } = SIZE;
const { LIGHT_GRAY, WHITE, LIGHT_BLUE } = colors;

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [state, setState] = useReducerState<{
    username: string,
    password: string,
  }>({
    username: '',
    password: '',
  });

  const { username, password } = state;

  const onLogin = async () => {
    await dispatch(
      login(username, password, () => {
        router.push('/');
      }),
    );
  };

  return (
    <ModalContainer
      onClick={() => router.push('/')}
      size="SMALL"
    >
      <S.Wrapper>
        <S.Span size="LARGE">트위터에 로그인하기</S.Span>
        <br />
        <ShortInput
          onChange={(value) => setState({ username: value })}
          name="username"
          value={username}
          title="닉네임"
        />
        <ShortInput
          onChange={(value) => setState({ password: value })}
          name="password"
          type="password"
          value={password}
          title="비밀번호"
        />
        <br />
        <ActionButton
          size="LARGE"
          fontColor={WHITE}
          title="로그인"
          onSubmit={onLogin}
        />
        <S.Span size="MEDIUM">
          계정이 없으신가요?
          <S.Blue onClick={() => router.push('/')}>가입하기</S.Blue>
        </S.Span>
      </S.Wrapper>
    </ModalContainer>
  );
}
