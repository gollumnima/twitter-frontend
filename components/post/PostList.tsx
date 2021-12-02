import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPost, getPosts } from '@store/post';
import { ComposeContainer } from '@components/post/ComposeContainer';
import { twitterAPI } from '@utils/axios.wrapper';
import { useAppSelector } from '@utils/hooksUtil';
import { Post } from './index';

export const PostList = () => {
  const dispatch = useDispatch();
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

  const handleFileChange = async (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    const formData = new FormData();
    formData.append('file', file);
    console.log(file, 'FILE');
    const { data } = await twitterAPI.post(
      `/api/posts/${postID}/image`,
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      },
    );
    setImageURL(data.url);
    console.log(postID, 'post ID');
    console.log(data, '파일 데이타');
  };

  const onSubmit = async () => {
    await twitterAPI.put(`/api/posts/${postID}`, {
      content: value,
      status: 'PUBLISHED',
    });
    console.log('수정왈');
  };

  useEffect(() => {
    handleTempPost();
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <ComposeContainer
        setValue={setValue}
        value={value}
        onSubmit={onSubmit}
        onFileChange={handleFileChange}
      />
      {
        postList?.map((post, id) => (
          <Post
            key={`${Date.now()}_${id}`}
            profileSrc={post.profileSrc}
            name={post.name}
            account={post.account}
            timestamp={post.timestamp}
            contents={post.content}
            contentsSrc={post.contentsSrc}
          />
        ))
      }
    </div>
  );
};
