import { useState, useEffect } from 'react';
import { Wrapper } from '@components/wrapper';
import { useRouter } from 'next/router';
import moment from 'moment';
import { Avatar } from '@components/common/Avatar';
import { useAppDispatch, useAppSelector } from '@utils/hooksUtil';
import { findUser, getSelf } from '@store/user';
import { Size } from '@utils/constants';
import { colors } from '@styles/colors';
import { FlexWrapper } from '@styles/common';
import { Post } from '@components/post';
import { ActionButton } from '@components/button/ActionButton';
import * as S from './style';

const { BLACK, GRAY } = colors;

export default function MyPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const username = router.asPath.split('/')[2];
  const myAccount = useAppSelector((state) => state.user.foundUser);
  const postList = useAppSelector((state) => state.post.postList ?? []);
  const myPosts = postList.filter((post) => post.User.username === username);
  const imgPosts = myPosts.filter((post) => post.images.length >= 1);
  const [tab, setTab] = useState('tweet');

  useEffect(() => {
    dispatch(getSelf());
    dispatch(findUser(username));
  }, [username]);

  console.log(myAccount, 'my accounts');

  if (!myAccount) return null;

  return (
    <Wrapper>
      <S.Container>
        <S.ProfileContainer>
          <FlexWrapper>
            <div>
              <Avatar src={myAccount.image_url} size={Size.LARGE} />
              <S.Span title="true">{myAccount.name}</S.Span>
              <S.Span color={GRAY}>{`@${myAccount.username}`}</S.Span>
              <S.Span>{myAccount.description}</S.Span>
              <S.Span color={GRAY}>
                가입일 :
                {
                  moment(myAccount.created_at).format('YYYY년 MM월 DD일')
                }
              </S.Span>
              <FlexWrapper>
                <FlexWrapper>
                  <S.Span title="true">300</S.Span>
                  <S.Span color={GRAY}>&nbsp;팔로우 중&nbsp;</S.Span>
                </FlexWrapper>
                <FlexWrapper>
                  <S.Span title="true">300</S.Span>
                  <S.Span color={GRAY}>&nbsp;팔로워</S.Span>
                </FlexWrapper>
              </FlexWrapper>
            </div>
            <ActionButton
              size={Size.MEDIUM}
              title="프로필 편집"
              fontColor={BLACK}
              onSubmit={() => router.push('/settings/profile')}
            />
          </FlexWrapper>
        </S.ProfileContainer>
        <FlexWrapper>
          <S.TabWrapper>
            <S.Tab active={tab === 'tweet' ? 'active' : ''}>
              <S.Span
                onClick={() => setTab('tweet')}
                title="true"
              >
                트윗
              </S.Span>
            </S.Tab>
            <S.Tab active={tab === 'media' ? 'active' : ''}>
              <S.Span
                onClick={() => setTab('media')}
                title="true"
              >
                미디어
              </S.Span>
            </S.Tab>
          </S.TabWrapper>
        </FlexWrapper>
        {
          myPosts.length < 1
          && <S.Span space="true"> 아직 작성한 글이 없습니다.</S.Span>
        }
        {
          [myPosts, imgPosts][tab === 'tweet' ? 0 : 1].map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))
        }
      </S.Container>
      <S.RightSideBar>
        <span>dd</span>
      </S.RightSideBar>
    </Wrapper>
  );
}
