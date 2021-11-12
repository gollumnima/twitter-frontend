import { ComposeIconContainer } from '@components/common/ComposeIconContainer';
import { Avatar } from '@components/common/Avatar';
import { TextField } from '@components/common/TextField';
import { FlexWrapper } from '@styles/common';
import styled from 'styled-components';

const ComposeContainer = styled.div`
  width: 100%;
`;

export const Compose = () => (
  <ComposeContainer>
    <FlexWrapper>
      <Avatar
        src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg"
        size="large"
      />
      <div>
        <TextField />
        <ComposeIconContainer />
      </div>
    </FlexWrapper>
  </ComposeContainer>

);
