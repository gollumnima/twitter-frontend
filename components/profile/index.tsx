import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useReducerState, useAppSelector } from '@utils/hooksUtil';
import { ModalContainer } from '@components/modal/ModalContainer';
import { Avatar } from '@components/common/Avatar';
import { ShortInput } from '@components/common/ShortInput';
import { Size } from '@utils/constants';
import { colors } from '@styles/colors';
import { ActionButton } from '@components/button/ActionButton';
import { twitterAPI } from '@utils/axios.wrapper';
import * as S from './style';

const { BLACK } = colors;

export default function ProfileSetting() {
  const router = useRouter();
  const ref = useRef<HTMLInputElement | null>(null);
  const myAccount = useAppSelector((state) => state.user.foundUser ?? null);
  const [isHover, setIsHover] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [state, setState] = useReducerState<{
    username: string,
    name: string,
    description: string,
    password: string
  }>({
    username: myAccount?.username ?? '',
    name: myAccount?.name ?? '',
    description: myAccount?.description ?? '',
    password: '',
  });

  const {
    username, name, description, password,
  } = state;

  const handleProfileImage = async (e:React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return undefined;
    const file = e.target.files[0];
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
    return setImageURL(data.url);
  };

  const handleUploadImage = () => {
    if (!ref.current) return;
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
      router.push(`/user/${myAccount?.username}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalContainer
      onClose={() => router.push(`/user/${myAccount?.username}`)}
      size={Size.LARGE}
    >
      <div>
        <S.AvatarWrapper
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <S.UploadInput
            type="file"
            ref={ref}
            accept="image/x-png,image/jpeg"
            onChange={handleProfileImage}
          />
          <Avatar
            src={imageURL?.length > 0 ? imageURL : myAccount?.image_url}
            size={Size.LARGE}
            onClick={handleUploadImage}
          />
          {
            isHover && <S.Span>이미지 업로드</S.Span>
          }
        </S.AvatarWrapper>
        <ShortInput
          onChange={(value) => setState({ username: value })}
          name="username"
          value={username}
          title="계정"
        />
        <ShortInput
          onChange={(value) => setState({ name: value })}
          name="name"
          value={name}
          title="닉네임"
        />
        <ShortInput
          onChange={(value) => setState({ description: value })}
          name="description"
          value={description}
          title="자기소개"
        />
        <ShortInput
          onChange={(value) => setState({ password: value })}
          name="password"
          value={password}
          title="비밀번호"
        />
        <ActionButton
          title="저장"
          fontColor={BLACK}
          size={Size.MEDIUM}
          onSubmit={handleProfileInfo}
        />
      </div>
    </ModalContainer>
  );
}
