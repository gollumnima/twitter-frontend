import React, { useState, useEffect } from 'react';
import { getPost, getPosts } from '@store/post';
import { useAppDispatch } from '@utils/hooksUtil';
import { twitterAPI } from '@utils/axios.wrapper';
import router from 'next/router';
import { ComposeContainer } from '../post/ComposeContainer';

export const Compose = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const [postID, setPostID] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const handleTempPost = async () => {
    const { data } = await twitterAPI.post('/api/posts');
    setPostID(data.id);
    dispatch(getPost(data.id));
  };

  const onSubmit = async () => {
    await twitterAPI.put(`/api/posts/${postID}`, {
      content: value,
      status: 'PUBLISHED',
    });
    dispatch(getPosts());
    router.push('/');
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

  useEffect(() => {
    handleTempPost();
    dispatch(getPosts());
  }, []);

  return (
    <ComposeContainer
      onChange={setValue}
      value={value}
      onSubmit={onSubmit}
      onFileChange={handleFileChange}
      previewImageURL={imageURL}
    />
  );
};
