import React, { useReducer } from 'react';
import axios from 'axios';
import { ModalContainer } from '@components/modal/ModalContainer';
import { Form } from '@components/common/Form';
import { ActionButton } from '@components/button/ActionButton';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';
import styled from 'styled-components';

const { SMALL, MEDIUM, LARGE } = SIZE;
const { LIGHT_GRAY, WHITE } = colors;
type Props = {

};

const Span = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

const useReducerState = (initialState = {}) => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  return useReducer(reducer, initialState);
};

export default function SignUp() {
  const [state, setState] = useReducerState({
    username: '',
    name: '',
    password: '',
  });

  const { username, name, password } = state;
  const handleChange = (e) => {
    const { value } = e.target;
    setState({ [e.target.name]: value });
  };

  const onSignUp = () => {
    const url = 'http://localhost:8000';
    try {
      const { data } = axios.post(`${url}/api/users`, {
        username,
        name,
        password,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ModalContainer>
      <Span>계정을 생성하세요</Span>
      <Form
        title="닉네임"
        name="username"
        value={username}
        handleChange={handleChange}
      />
      <Form
        title="이름"
        name="name"
        value={name}
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
        title="회원가입"
        onSubmit={onSignUp}
      />
    </ModalContainer>
  );
}
