import { useRef, useLayoutEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';

const { BLACK, LIGHT_GRAY } = colors;
const minHeight = 28;

const Container = styled.div`
  width: 500px;
`;

const Input = styled.textarea`
  all: unset;
  width: 100%;
  min-height: ${minHeight}; 
  resize: none;
  
  padding: 5px 5px;  
  background-color: ${BLACK};
  color: ${LIGHT_GRAY};
  ::placeholder {
    color: ${LIGHT_GRAY};
    font-size: 17px;
  }
`;

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const TextField: React.FC<Props> = ({ value, setValue }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  useLayoutEffect(() => {
    if (!ref) return;
    if (!ref.current) return;
    // when delete texts, shrink textarea
    ref.current.style.height = 'inherit';
    ref.current.style.height = `${Math.max(ref.current.scrollHeight, minHeight)}px`;
  }, [value]);

  return (
    <Container>
      <Input
        placeholder="무슨 일이 일어나고 있나요?"
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};
