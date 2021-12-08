import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { twitterAPI } from '@utils/axios.wrapper';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: null,
    postList: [],
  },
  reducers: {
    setPost: (state, action: PayloadAction) => {
      state.post = action.payload;
    },
    setPostList: (state, action: PayloadAction) => {
      state.postList = action.payload;
    },
  },
});

export default postSlice.reducer;

const { setPost, setPostList } = postSlice.actions;

export const getPosts = () => async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.get('/api/posts/');
    dispatch(setPostList(data.rows));
  } catch (err) {
    console.error(err);
  }
};

export const getPost = (postId: number) => async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.get(`/api/posts/${postId}`);
    dispatch(setPost(data));
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = (postId: number) => async (dispatch: (param: number) => void) => {
  await twitterAPI.delete(`/api/posts/${postId}`);
  await dispatch(getPosts());
};

export const likePost = (postId: number) => async (dispatch: () => void) => {
  await twitterAPI.post(`/api/posts/${postId}/like`);
  await dispatch(getPost(postId));
  await dispatch(getPosts());
};

export const unlikePost = (postId: number) => async (dispatch: () => void) => {
  await twitterAPI.delete(`/api/posts/${postId}/like`);
  await dispatch(getPost(postId));
  await dispatch(getPosts());
};
