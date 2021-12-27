import React from 'react';
import * as S from './style';

type Props = {

};

export const LeftBanner: React.FC<Props> = () => {
  const items = [
    {
      id: 0,
      sub: '대한민국에서 트랜드 중',
      title: '코어 자바스크립트',
    },
    {
      id: 1,
      sub: '대한민국에서 트랜드 중',
      title: '속깊은 자바스크립트',
    },
    {
      id: 2,
      sub: '',
      title: '클린코드',
    },
    {
      id: 3,
      sub: '',
      title: 'Do it! 타입스크립트 프로그래밍',
    },
  ];
  return (
    <S.Container>
      <S.BannerWrapper>
        <S.Title>나를 위한 트랜드</S.Title>
        {
        items.map((item) => (
          <>
            <S.BannerItem sub>{item.sub.length >= 1 && item.sub}</S.BannerItem>
            <S.BannerItem>{item.title}</S.BannerItem>
          </>
        ))
        }
      </S.BannerWrapper>
    </S.Container>
  );
};
