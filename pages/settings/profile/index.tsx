import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useReducerState, useAppSelector } from '@utils/hooksUtil';
import { ModalContainer } from '@components/modal/ModalContainer';
import { Avatar } from '@components/common/Avatar';
import { ShortInput } from '@components/common/ShortInput';
import { SIZE } from '@utils/constants';
import { colors } from '@styles/colors';
import { ActionButton } from '@components/button/ActionButton';
import { twitterAPI } from '@utils/axios.wrapper';

const { SMALL, MEDIUM, LARGE } = SIZE;
const {
  WHITE, LIGHT_BLUE, LIGHT_GRAY, BLACK,
} = colors;

const UploadInput = styled.input`
  display: none;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 132px;
  border-radius: 50%;

  :hover {
    background-color: rgba(47,51,54, 0.8);
  }
`;

const Span = styled.span`
  position: absolute;
  top: 60px;  
  left: 25px;
  color: ${WHITE};
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

export default function ProfileSetting() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const myAccount = useAppSelector((state) => state.user.foundUser ?? {});
  const [isHover, setIsHover] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [state, setState] = useReducerState({
    username: myAccount.username,
    name: myAccount.name,
    description: myAccount.description,
    password: '',
  });

  const {
    username, name, description, password,
  } = state;

  const handleProfileImage = async (e) => {
    const [file] = e.target.files;
    const formData = new FormData();

    formData.append('file', file);
    const { data } = await twitterAPI.post(
      '/api/users/self/persona',
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      },
    );
    setImageURL(data.url);
  };

  const handleUploadImage = () => {
    if (!ref) return;
    ref.current.click();
  };

  const handleProfileInfo = async () => {
    try {
      await twitterAPI.put('/api/users/self/', {
        username,
        name,
        description,
        password,
      });
      router.push(`/user/${myAccount.username}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalContainer
      onClick={() => router.push(`/user/${myAccount.username}`)}
      size={LARGE}
    >
      <div>
        <AvatarWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <UploadInput
            type="file"
            ref={ref}
            accept="image/x-png,image/jpeg"
            onChange={handleProfileImage}
          />
          <Avatar
            src={imageURL?.length > 0 ? imageURL : myAccount.image_url}
            size={LARGE}
            onClick={handleUploadImage}
          />
          {
            isHover && <Span>이미지 업로드</Span>
          }
        </AvatarWrapper>
        <ShortInput
          setValue={setState}
          name="username"
          value={username}
          title="계정"
        />
        <ShortInput
          setValue={setState}
          name="name"
          value={name}
          title="닉네임"
        />
        <ShortInput
          setValue={setState}
          name="description"
          value={description}
          title="자기소개"
        />
        <ShortInput
          setValue={setState}
          name="password"
          value={password}
          title="비밀번호"
        />
        <ActionButton
          title="저장"
          fontColor={BLACK}
          size={MEDIUM}
          onSubmit={handleProfileInfo}
        />
      </div>
    </ModalContainer>
  );
}
