import * as S from './style';

type Props = {
  handleChange: (param: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
};

export const Form = ({
  handleChange, value, title, name,
}: Props) => (
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
