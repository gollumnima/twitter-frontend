import {
  createSlice, PayloadAction, createAsyncThunk, ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import { twitterAPI } from '@utils/axios.wrapper';
import { MaybePromise, DispatchInThunk } from '~/types';
import * as TPost from '~/types/post';

const initialState: TPost.PostState = {
  post: null,
  postList: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<TPost.GetPostResponse>) => {
      // eslint-disable-next-line no-param-reassign
      state.post = action.payload;
    },
    setPostList: (state, action: PayloadAction<TPost.GetPostResponse[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.postList = action.payload;
    },
  },
});

export default postSlice.reducer;

const { setPost, setPostList } = postSlice.actions;

export const getPosts = () => async (dispatch: DispatchInThunk) => {
  try {
    const { data } = await twitterAPI.get('/api/posts/');
    dispatch(setPostList(data.rows));
  } catch (err) {
    console.error(err);
  }
};

export const getPost = (postId: number) => async (dispatch: DispatchInThunk) => {
  try {
    const { data } = await twitterAPI.get(`/api/posts/${postId}`);
    dispatch(setPost(data));
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = (postId: number) => async (dispatch: DispatchInThunk) => {
  await twitterAPI.delete(`/api/posts/${postId}`);
  await dispatch(getPosts());
};

export const likePost = (postId: number) => async (dispatch: DispatchInThunk) => {
  await twitterAPI.post(`/api/posts/${postId}/like`);
  await dispatch(getPost(postId));
  await dispatch(getPosts());
};

export const unlikePost = (postId: number) => async (dispatch: DispatchInThunk) => {
  await twitterAPI.delete(`/api/posts/${postId}/like`);
  await dispatch(getPost(postId));
  await dispatch(getPosts());
};
