import styled, { css } from 'styled-components';
import { colors } from '@styles/colors';

const {
  LINE_GRAY, GRAY, LIGHT_GRAY, BLACK, WHITE, LIGHT_GREEN, LIGHT_BLUE, LIGHT_RED,
} = colors;

export const Container = styled.article`
  border-bottom: 1px solid ${LINE_GRAY};
  padding: 10px 10px;
`;

export const Span = styled.span<{
  primary?: string;
  title?: string;
  underline?: string;
}>`
  display: block;
  color: ${(props) => (props.primary ? LIGHT_GRAY : GRAY)};
  font-weight: ${(props) => (props.title ? 600 : 400)};
  margin-right: 10px;

  ${(props) => props.underline && css`
    &:hover {
      border-bottom: 1px solid ${WHITE};
      cursor: pointer;
    }
  `}
  
  &:last-child {
    margin-right: 0;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-left: 14px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const IconInnerWrapper = styled.div`
  display: flex;
  max-width: 50px;
  width: 100%;
  justify-content: space-evenly;
`;

export const IconText = styled.span<{
  activatedColor: string;
}>`
  padding-top: 4px;
  font-size: 15px;
  color: ${(props) => props.activatedColor};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const Image = styled.img`
  width: 490px;
  height: 200px;
  border-radius: 20px;

  margin-top: 8px;
`;

export const MenuItem = styled.li`
  padding: 10px 10px;
  background-color: ${BLACK};
  color: ${WHITE};
  border: 1px solid ${LINE_GRAY};
  cursor: pointer;
`;
