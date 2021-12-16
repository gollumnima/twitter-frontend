import { useRouter } from 'next/router';
import { useAppDispatch, useReducerState } from '@utils/hooksUtil';
import { ModalContainer } from '@components/modal/ModalContainer';
import { ActionButton } from '@components/button/ActionButton';
import { colors } from '@styles/colors';
import { SIZE } from '@utils/constants';
import styled from 'styled-components';
import { signUp } from '@store/user';
import { ShortInput } from '@components/common/ShortInput';

const { SMALL, LARGE } = SIZE;
const { LIGHT_GRAY, WHITE } = colors;
type Props = {

};

const Span = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

export default function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [state, setState] = useReducerState({
    username: '',
    name: '',
    password: '',
    description: '',
  });

  const {
    username, name, password, description,
  } = state;

  const onSignUp = async () => {
    await dispatch(signUp(username, name, password, description));
    router.push('/');
  };

  return (
    <ModalContainer
      onClick={() => router.push('/')}
      size={SMALL}
    >
      <>
        <Span>계정을 생성하세요</Span>
        <ShortInput
          title="닉네임"
          name="username"
          value={username}
          setValue={setState}
        />
        <ShortInput
          title="이름"
          name="name"
          value={name}
          setValue={setState}
        />
        <ShortInput
          title="비밀번호"
          name="password"
          value={password}
          setValue={setState}
        />
        <ShortInput
          title="자기소개"
          name="description"
          value={description}
          setValue={setState}
        />
        <ActionButton
          size={LARGE}
          fontColor={WHITE}
          title="회원가입"
          onSubmit={onSignUp}
        />
      </>

    </ModalContainer>
  );
}
