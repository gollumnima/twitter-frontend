import styled from 'styled-components';
import { ComposeIconContainer } from '@components/common/ComposeIconContainer';
import { Avatar } from '@components/common/Avatar';
import { TextField } from '@components/common/TextField';
import { FlexWrapper } from '@styles/common';
import { ActionButton } from '@components/button/ActionButton';
import { SIZE } from '@utils/constants';
import { colors } from '@styles/colors';

const { MEDIUM, LARGE } = SIZE;
const {
  WHITE,
} = colors;
const ComposeWrapper = styled.div`
  width: 100%;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  value: string;
  setValue: (value: string) => void;
}

export const ComposeContainer: React.FC<Props> = ({ setValue, value }) => (
  <ComposeWrapper>
    <FlexWrapper>
      <Avatar
        src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg"
        size={LARGE}
      />
      <div style={{ width: '100%' }}>
        <TextField setValue={setValue} value={value} />
        <BottomWrapper>
          <ComposeIconContainer />
          <ActionButton
            size={MEDIUM}
            title="트윗하기"
            fontColor={WHITE}
          />
        </BottomWrapper>
      </div>
    </FlexWrapper>
  </ComposeWrapper>
);
