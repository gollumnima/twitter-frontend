import styled from 'styled-components';
import { colors } from '@styles/colors';

const { GRAY } = colors;

export const Container = styled.div`
border: 1px solid ${GRAY};
width: 300px;
`;
export const Span = styled.span`
font-size: 18px;
color: white;
`;

export const Input = styled.input`
all: unset;
color: white;
padding: 10px 0;
`;
