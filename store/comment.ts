import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { twitterAPI } from '@utils/axios.wrapper';
import { DispatchInThunk } from '~/types';
import * as TComment from '~/types/comment';

const initialState: TComment.CommentState = {
  comment: null,
  commentList: [],
  isEditable: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<TComment.ICommentEntity>) => {
      // eslint-disable-next-line no-param-reassign
      state.comment = action.payload;
    },
    setCommentList: (state, action: PayloadAction<TComment.ICommentEntity[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.commentList = action.payload;
    },
  },
});

export default commentSlice.reducer;

const { setComment, setCommentList } = commentSlice.actions;

export const getComment = (postId : number) => async (dispatch: DispatchInThunk) => {
  try {
    const { data } = await twitterAPI.post(` /api/comments/${postId}`);
    dispatch(setComment(data));
  } catch (err) {
    console.error(err);
  }
};

export const getComments = (postId : number) => async (dispatch: DispatchInThunk) => {
  try {
    const { data } = await twitterAPI.get(`/api/comments/${postId}`);
    dispatch(setCommentList(data.rows));
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = (postId : number) => async (dispatch: DispatchInThunk) => {
  try {
    await twitterAPI.delete(`/api/comments/${postId}`);
    dispatch(getComments(postId));
  } catch (err) {
    console.error(err);
  }
};

export const updateComment = (
  commentId: number,
  postId: number,
  content: string,
) => async (dispatch: DispatchInThunk) => {
  try {
    await twitterAPI.put(`/api/comments/${commentId}`, { content });
    dispatch(getComments(postId));
  } catch (err) {
    console.error(err);
  }
};
