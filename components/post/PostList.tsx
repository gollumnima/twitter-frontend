import React, { useState, useEffect } from 'react';
import { getPost, getPosts } from '@store/post';
import { ComposeContainer } from '@components/post/ComposeContainer';
import { twitterAPI } from '@utils/axios.wrapper';
import { useAppDispatch, useAppSelector } from '@utils/hooksUtil';
import { colors } from '@styles/colors';
import styled from 'styled-components';
import { Post } from './index';

const {
  WHITE, LINE_GRAY,
} = colors;

const FixedContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${LINE_GRAY};
  border-bottom: 1px solid ${LINE_GRAY};
  height: 50px;

`;

const Span = styled.span`
  display: block;
  color: ${WHITE};
  font-size: 20px;
  font-weight: 600;
  margin-left: 14px;
  margin-top: 14px;
`;

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
      <FixedContainer>
        <Span>홈</Span>
      </FixedContainer>
      <ComposeContainer
        setValue={setValue}
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
