import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const reducer = combineReducers({
  user,
  post,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type RootState = ReturnType<typeof store.getState>;

export default store;
