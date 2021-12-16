import React, { ChangeEvent, useReducer } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useReducerState } from '@utils/hooksUtil';
import { ModalContainer } from '@components/modal/ModalContainer';
import { ActionButton } from '@components/button/ActionButton';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';
import styled from 'styled-components';
import { getToken, login } from '@store/user';
import { ShortInput } from '@components/common/ShortInput';

const { SMALL, MEDIUM, LARGE } = SIZE;
const { LIGHT_GRAY, WHITE, LIGHT_BLUE } = colors;

type StyledProps = {
  size: boolean;
};

const Wrapper = styled.div`
  padding-left: 25px; 
`;

const Span = styled.span`
  display: block;
  margin-top: ${(props: StyledProps) => (props.size === MEDIUM ? '20px' : '')} ;
  font-size: ${(props: StyledProps) => (props.size === MEDIUM ? '20px' : '30px')} ;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

const Blue = styled.span`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${LIGHT_BLUE};
  cursor: pointer;
`;

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [state, setState] = useReducerState({
    username: '',
    password: '',
  });

  const onLogin = async () => {
    await dispatch(
      login(username, password, () => {
        router.push('/');
      }),
    );
  };

  const { username, password } = state;

  return (
    <ModalContainer
      onClick={() => router.push('/')}
      size={SMALL}
    >
      <Wrapper>
        <Span size={LARGE}>트위터에 로그인하기</Span>
        <br />
        <ShortInput
          setValue={setState}
          name="username"
          value={username}
          title="닉네임"
        />
        <ShortInput
          setValue={setState}
          name="password"
          value={password}
          title="비밀번호"
        />
        <br />
        <ActionButton
          size={LARGE}
          fontColor={WHITE}
          title="로그인"
          onSubmit={onLogin}
        />
        <Span size={MEDIUM}>
          계정이 없으신가요?
          <Blue onClick={() => router.push('/')}>가입하기</Blue>
        </Span>
      </Wrapper>
    </ModalContainer>
  );
}
