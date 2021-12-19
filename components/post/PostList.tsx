import React, { useState, useEffect } from 'react';
import { getPost, getPosts } from '@store/post';
import { ComposeContainer } from '@components/post/ComposeContainer';
import { twitterAPI } from '@utils/axios.wrapper';
import { useAppDispatch, useAppSelector } from '@utils/hooksUtil';
import * as S from './styles';
import { Post } from './index';

export const PostList = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector((state) => state.post.postList);

  const [value, setValue] = useState('');
  const [postID, setPostID] = useState(null);
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleTempPost = async () => {
    const { data } = await twitterAPI.post('/api/posts');
    setPostID(data.id);
    dispatch(getPost(data.id));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return undefined;
    // const file = Array.from(e.target.files);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await twitterAPI.post(
      `/api/posts/${postID}/image`,
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      },
    );
    return setImageURL(data.url);
  };

  const onSubmit = async () => {
    await twitterAPI.put(`/api/posts/${postID}`, {
      content: value,
      status: 'PUBLISHED',
    });
  };

  useEffect(() => {
    handleTempPost();
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <S.FixedContainer>
        <S.Title>홈</S.Title>
      </S.FixedContainer>
      <ComposeContainer
        onChange={setValue}
        value={value}
        onSubmit={onSubmit}
        onFileChange={handleFileChange}
      />
      {
        postList?.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  );
};
