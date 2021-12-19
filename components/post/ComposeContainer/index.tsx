import { ComposeIconContainer } from '@components/common/ComposeIconContainer';
import { Avatar } from '@components/common/Avatar';
import { TextField } from '@components/common/TextField';
import { ActionButton } from '@components/button/ActionButton';
import { Size } from '@utils/constants';
import { colors } from '@styles/colors';
import { useAppSelector } from '@utils/hooksUtil';
import * as S from './style';

const { WHITE } = colors;

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.MouseEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ComposeContainer: React.FC<Props> = ({
  onChange, value, onSubmit, onFileChange,
}) => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  // if (!userInfo) return null
  // const { image_url: IMAGE_URL } = userInfo;
  return (
    <S.ComposeWrapper>
      <S.OuterContainer>
        <Avatar
          src={userInfo?.image_url}
          size={Size.MEDIUM}
        />
        <S.InnerContainer style={{ width: '100%' }}>
          <TextField onChange={onChange} value={value} />
          <S.BottomWrapper>
            <ComposeIconContainer onFileChange={onFileChange} />
            <ActionButton
              size={Size.MEDIUM}
              title="트윗하기"
              fontColor={WHITE}
              onSubmit={onSubmit}
            />
          </S.BottomWrapper>
        </S.InnerContainer>
      </S.OuterContainer>
    </S.ComposeWrapper>
  );
};
