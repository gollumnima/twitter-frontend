import styled from 'styled-components';
import { colors } from '@styles/colors';

const { WHITE } = colors;

export const UploadInput = styled.input`
display: none;
`;

export const AvatarWrapper = styled.div`
position: relative;
width: 132px;
border-radius: 50%;

:hover {
  background-color: rgba(47,51,54, 0.8);
}
`;

export const Span = styled.span`
position: absolute;
top: 60px;  
left: 25px;
color: ${WHITE};
font-weight: 700;
font-size: 16px;
cursor: pointer;
`;
