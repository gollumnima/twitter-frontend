import styled from 'styled-components';
import { colors } from '~/styles/colors';

const {
  LINE_GRAY, DARK_GRAY, WHITE, GRAY,
} = colors;

export const Container = styled.nav`
  padding-top: 50px;
  border-left: 1px solid ${LINE_GRAY};
`;

export const BannerWrapper = styled.div`
  position: fixed;
  width: 350px;
  padding: 20px 20px;
  margin-left: 15px;
  background: ${DARK_GRAY};
  border-radius: 20px;
`;

export const Title = styled.span`
  color: ${WHITE};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const BannerItem = styled.span<{ sub?: boolean }>`
  display: block;
  color: ${(props) => (props.sub ? GRAY : WHITE)};
  font-size: ${(props) => (props.sub ? '13px' : '15px')};
  font-weight: ${(props) => (props.sub ? 400 : 600)};
  margin-top: ${((props) => (props.sub ? '20px' : '5px'))};
`;
