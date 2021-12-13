import { useEffect } from 'react';
import { Wrapper } from '@components/wrapper';
import { useRouter } from 'next/router';
import { Avatar } from '@components/common/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { findUser, getSelf } from '@store/user';
import { SIZE } from '@utils/constants';
import * as S from './style';

const { LARGE } = SIZE;

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const username = router.asPath.split('/')[2];
  const myAccount = useSelector((state) => state.user.foundUser);

  useEffect(() => {
    dispatch(getSelf());
    dispatch(findUser(username));
  }, [username]);

  return (
    <Wrapper>
      <S.Container>
        <Avatar src={myAccount.image_url} size={LARGE} />
        <S.Span title>{myAccount.username}</S.Span>
      </S.Container>
      <S.RightSideBar>
        <span>dd</span>
      </S.RightSideBar>
    </Wrapper>
  );
}
