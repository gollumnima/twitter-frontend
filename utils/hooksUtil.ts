import { useReducer } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@store/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReducerState = (initialState = {}) => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  return useReducer(reducer, initialState);
};
