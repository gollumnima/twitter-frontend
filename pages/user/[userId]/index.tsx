import { useState, useEffect } from 'react';
import { Wrapper } from '@components/wrapper';
import { useRouter } from 'next/router';
import moment from 'moment';
import { Avatar } from '@components/common/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { findUser, getSelf } from '@store/user';
import { SIZE } from '@utils/constants';
import { colors } from '@styles/colors';
import { FlexWrapper } from '@styles/common';
import { Post } from '@components/post';
import { ActionButton } from '@components/button/ActionButton';
import * as S from './style';

const { MEDIUM, LARGE } = SIZE;
const { BLACK } = colors;

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const username = router.asPath.split('/')[2];
  const myAccount = useSelector((state) => state.user.foundUser ?? {});
  const postList = useSelector((state) => state.post.postList ?? []);
  const myPosts = postList.filter((post) => post.User.username === username);
  const imgPosts = myPosts.filter((post) => post.images.length >= 1);
  const [tab, setTab] = useState('tweet');

  console.log(myAccount, 'jmy');
  useEffect(() => {
    dispatch(getSelf());
    dispatch(findUser(username));
  }, [username]);

  return (
    <Wrapper>
      <S.Container>
        <S.ProfileContainer>
          <FlexWrapper>
            <div>
              <Avatar src={myAccount.image_url} size={LARGE} />
              <S.Span title="true">{myAccount.username}</S.Span>
              <S.Span>{myAccount.name}</S.Span>
              <S.Span>
                가입일 :
                {
                  moment(myAccount.created_at).format('YYYY년 MM월 DD일')
                }
              </S.Span>
              <FlexWrapper>
                <FlexWrapper>
                  <S.Span title="true">300</S.Span>
                  <S.Span>팔로우 중</S.Span>
                </FlexWrapper>
                <FlexWrapper>
                  <S.Span title="true">300</S.Span>
                  <S.Span> 팔로워</S.Span>
                </FlexWrapper>
              </FlexWrapper>
            </div>
            <ActionButton
              size={MEDIUM}
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
          [myPosts, imgPosts][tab === 'tweet' ? 0 : 1].map((post, index) => (
            <Post
              postId={post.id}
              userId={post.user_id}
              key={`${Date.now()}_${index}`}
              profileSrc={post.profileSrc}
              name={post.User.name}
              account={post.User.username}
              timestamp={post.created_at}
              contents={post.content}
              contentsSrc={post.images ?? []}
              likes={post.Likes}
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
