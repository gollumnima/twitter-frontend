import styled, { css } from 'styled-components';
import { colors } from '@styles/colors';

const {
  GRAY, LIGHT_GRAY, LINE_GRAY, LIGHT_BLUE,
} = colors;

type StyledProps = {
  active?: string;
  title?: string;
  space?: string;
  color?: string;
};

export const Container = styled.div`
  width: 590px;
  height: 100vh;
`;

export const ProfileContainer = styled.div`
  margin-top: 20px;
  margin-left: 25px;
`;

export const Span = styled.span`
  display: block;
  margin-top: 10px;
  margin-left: ${(props: StyledProps) => (props.space ? '35px' : '')};
  color: ${(props: StyledProps) => (props.color === GRAY ? GRAY : LIGHT_GRAY)};
  font-size: ${(props: StyledProps) => (props.title ? '20px' : '14px')};
  font-weight: ${(props: StyledProps) => (props.title ? '700' : '400')};
`;

export const TabWrapper = styled.ul`
  display: flex;
  margin: 15px 0 0 25px;
`;

export const Tab = styled.li`
  padding: 10px 10px;
  margin-left: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  border-bottom: ${(props: StyledProps) => (props.active && `4px solid ${LIGHT_BLUE}`)};

  &:hover {
    border-bottom: 4px solid ${LIGHT_BLUE};
  } 
`;

export const RightSideBar = styled.div`
  width: 350px;
  height: 100vh;
  border-left: 1px solid ${LINE_GRAY};
`;
