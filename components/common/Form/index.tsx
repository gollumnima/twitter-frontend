import * as S from './style';

export const Form = ({
  handleChange, value, title, name,
}) => (
  <S.Container>
    <S.Span>{title}</S.Span>
    <S.Input
      name={name}
      value={value}
      onChange={handleChange}
      type={title === '비밀번호' ? 'password' : 'text'}
    />
  </S.Container>
);
