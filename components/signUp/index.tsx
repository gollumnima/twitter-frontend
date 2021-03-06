import { useRouter } from 'next/router';
import { useReducerState } from '@utils/hooksUtil';
import { ModalContainer } from '@components/modal/ModalContainer';
import { ActionButton } from '@components/button/ActionButton';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';
import styled from 'styled-components';
import { signUp } from '@store/user';
import { ShortInput } from '@components/common/ShortInput';

const { LIGHT_GRAY, WHITE } = colors;

const Span = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

export default function SignUp() {
  const router = useRouter();
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
    await signUp(username, name, password, description);
    router.push('/');
  };

  return (
    <ModalContainer
      onClose={() => router.push('/')}
      size={Size.MEDIUM}
    >
      <>
        <Span>계정을 생성하세요</Span>
        <ShortInput
          title="닉네임"
          name="username"
          value={username}
          onChange={(value) => setState({ username: value })}
        />
        <ShortInput
          title="이름"
          name="name"
          value={name}
          onChange={(value) => setState({ name: value })}
        />
        <ShortInput
          title="비밀번호"
          name="password"
          value={password}
          onChange={(value) => setState({ password: value })}
        />
        <ShortInput
          title="자기소개"
          name="description"
          value={description}
          onChange={(value) => setState({ description: value })}
        />
        <ActionButton
          size={Size.LARGE}
          fontColor={WHITE}
          title="회원가입"
          onSubmit={onSignUp}
        />
      </>

    </ModalContainer>
  );
}
