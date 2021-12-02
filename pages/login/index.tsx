import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ModalContainer } from '@components/modal/ModalContainer';
import { Form } from '@components/common/Form';
import { ActionButton } from '@components/button/ActionButton';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getToken, login } from '@store/user';

const { SMALL, MEDIUM, LARGE } = SIZE;
const { LIGHT_GRAY, WHITE, LIGHT_BLUE } = colors;
type Props = {

};

const Span = styled.span`
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

const Blue = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${LIGHT_BLUE};
  cursor: pointer;

`;

const useReducerState = (initialState = {}) => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  return useReducer(reducer, initialState);
};

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = useReducerState({
    username: '',
    password: '',
  });

  const { username, password } = state;
  const handleChange = (e) => {
    const { value } = e.target;
    setState({ [e.target.name]: value });
  };

  const onLogin = async () => {
    await dispatch(
      login(username, password, () => {
        router.push('/');
      }),
    );
  };

  return (
    <ModalContainer>
      <Span>트위터에 로그인하기</Span>
      <Form
        title="닉네임"
        name="username"
        value={username}
        handleChange={handleChange}
      />
      <Form
        title="비밀번호"
        name="password"
        value={password}
        handleChange={handleChange}
      />
      <ActionButton
        size={LARGE}
        fontColor={WHITE}
        title="로그인"
        onSubmit={onLogin}
      />
      <Span>
        계정이 없으신가요?
        <Blue onClick={() => router.push('/')}>가입하기</Blue>
      </Span>
    </ModalContainer>
  );
}
