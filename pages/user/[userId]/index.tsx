import { useEffect } from 'react';
import { Wrapper } from '@components/wrapper';
import { useRouter } from 'next/router';
import { Avatar } from '@components/common/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { findUser } from '@store/user';
import * as S from './style';

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const username = router.asPath.split('/')[2];
  const myAccount = useSelector((state) => state.user.foundUser);

  console.log(myAccount, 'aocu');

  useEffect(() => {
    dispatch(findUser(username));
  }, [username]);

  return (
    <Wrapper>
      <S.Container>
        <Avatar src={myAccount.image_url} size="big" />
        <S.Span>{myAccount.username}</S.Span>
      </S.Container>
      <div style={{ width: '500px ', background: 'yellow', height: '300px' }} />
      <S.RightSideBar>
        <span>dd</span>
      </S.RightSideBar>
    </Wrapper>
  );
}
