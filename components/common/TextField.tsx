import { useState, ChangeEvent } from 'react';
import styled from 'styled-components'
import { colors } from '@styles/colors';

const { BLACK, LIGHT_GRAY } = colors;

const Container = styled.div`
  width: 500px;
`

const Input = styled.input`
  all: unset;

  width: 100%;
  background-color: ${BLACK};
  color: ${LIGHT_GRAY};
  ::placeholder {
    color: ${LIGHT_GRAY};
    font-size: 17px;
  }
`

export const TextField = () => {
  const [value, setValue] = useState('');
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  
  return (
    <Container>
      <Input
        type="text"
        placeholder="무슨 일이 일어나고 있나요?"
        onChange={onChange}
        value={value}
      />
    </Container>
    
  )
}