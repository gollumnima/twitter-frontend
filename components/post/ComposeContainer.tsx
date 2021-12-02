import styled from 'styled-components';
import { ComposeIconContainer } from '@components/common/ComposeIconContainer';
import { Avatar } from '@components/common/Avatar';
import { TextField } from '@components/common/TextField';
import { FlexWrapper } from '@styles/common';
import { ActionButton } from '@components/button/ActionButton';
import { SIZE } from '@utils/constants';
import { colors } from '@styles/colors';
import { useAppSelector } from '@utils/hooksUtil';

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
  onSubmit: (e: React.MouseEvent) => void;
};

export const ComposeContainer: React.FC<Props> = ({
  setValue, value, onSubmit, onFileChange,
}) => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const { image_url: IMAGE_URL } = userInfo;
  return (
    <ComposeWrapper>
      <FlexWrapper>
        <Avatar
          src={IMAGE_URL}
          size={LARGE}
        />
        <div style={{ width: '100%' }}>
          <TextField setValue={setValue} value={value} />
          <BottomWrapper>
            <ComposeIconContainer onFileChange={onFileChange} />
            <ActionButton
              size={MEDIUM}
              title="트윗하기"
              fontColor={WHITE}
              onSubmit={onSubmit}
            />
          </BottomWrapper>
        </div>
      </FlexWrapper>
    </ComposeWrapper>
  );
};
