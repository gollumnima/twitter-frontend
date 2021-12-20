import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LIGHT_GRAY, LINE_GRAY } = colors;

const Container = styled.div`
  border: 1px solid ${LINE_GRAY};
  border-radius: 5px;
  width: 500px;
  padding: 10px 10px;
  margin: 10px 0;
`;

const Input = styled.input`
  all: unset;
  display: block;
  width: 100%;
  margin-top: 5px;
  color: ${LIGHT_GRAY};
`;

const Span = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${LIGHT_GRAY};
`;

type Props = {
  value: string;
  type?: string;
  onChange: (value: string) => void;
  title: string;
  name: string;
};

export const ShortInput: React.FC<Props> = ({
  value, onChange, title, type = 'text',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Span>{title}</Span>
      <Input
        onChange={handleChange}
        value={value}
        type={type}
      />
    </Container>

  );
};
