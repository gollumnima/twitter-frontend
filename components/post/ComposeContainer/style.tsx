import styled from 'styled-components';
import { colors } from '@styles/colors';

const { LINE_GRAY } = colors;

export const OuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 10px;
  border-top: 1px solid ${LINE_GRAY};
  border-bottom: 1px solid ${LINE_GRAY};
`;

export const InnerContainer = styled.div`
  width: 100%;
  margin-left: 14px;
`;
export const ComposeWrapper = styled.div`
  width: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
