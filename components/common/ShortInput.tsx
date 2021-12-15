import { useRef, useLayoutEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';

const {
  BLACK, LIGHT_GRAY, LINE_GRAY, LIGHT_BLUE,
} = colors;

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
  margin-top: 5px;
  color: ${LIGHT_GRAY};

`;

const Span = styled.span`
  font-size: 15px;
  color: ${LIGHT_GRAY};
`;

type Props = {
  value: string;
  setValue: (value: string) => void;
  title: string;
};

export const ShortInput: React.FC<Props> = ({
  value, setValue, title,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e, 'VAL');
    setValue(e.target.value);
  };

  return (
    <Container>
      <Span>{title}</Span>
      <Input
        onChange={onChange}
        value={value}
      />
    </Container>

  );
};
