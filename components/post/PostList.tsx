import { useState } from 'react';
import { ComposeContainer } from '@components/post/ComposeContainer';
import { Post } from './index';

const tempPosts = [
  {
    profileSrc: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
    name: 'ABC',
    account: 'asdlkjaslkf',
    timestamp: 1234,
    contents: '하하하하하1123',
    contentsSrc: [],
  },
  {
    profileSrc: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
    name: 'ABCDF',
    account: 'asdlkjaslkf',
    timestamp: 1234,
    contents: 'fkfklkslkdjflksjflksjdflasjfdlasjdflsajflsajdfjsdlfjasdfjslfj',
    contentsSrc: [],
  },
  {
    profileSrc: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
    name: 'ABC@@S',
    account: 'asdlkjaslkf',
    timestamp: 1234,
    contents: '오늘 저녁은 카레로 해먹을꺼야. 돼지고기 카레를 먹을까 아니면 그냥 야채커레를 끓일까 고민쥬ㅜㅇ쓰 님들아 추천좀',
    contentsSrc: [],
  },
  {
    profileSrc: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
    name: 'ABCDD',
    account: 'asdlkjaslkf',
    timestamp: 1234,
    contents: '하하하하하1123',
    contentsSrc: [],
  },
  {
    profileSrc: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
    name: 'ABCdf',
    account: 'asdlkjaslkf',
    timestamp: 1234,
    contents: '하하하하하1123',
    contentsSrc: [],
  },
];

export const PostList = () => {
  const [value, setValue] = useState('');
  const onSubmit = (post: string) => tempPosts.concat({
    profileSrc: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
    name: 'ABCdf',
    account: 'asdlkjaslkf',
    timestamp: 1234,
    contents: post,
    contentsSrc: [],
  });

  return (
    <div>
      <ComposeContainer setValue={setValue} value={value} onSubmit={onSubmit} />
      {
        tempPosts.map((post, id) => (
          <Post
            key={`${Date.now()}_${id}`}
            profileSrc={post.profileSrc}
            name={post.name}
            account={post.account}
            timestamp={post.timestamp}
            contents={post.contents}
            contentsSrc={post.contentsSrc}
          />
        ))
      }
    </div>
  );
};
