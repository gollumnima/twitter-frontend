import { PayloadAction } from '@reduxjs/toolkit';

export type MaybePromise<T> = T | Promise<T>;

export type DispatchInThunk = <P = void, T extends string = string>(
  param: PayloadAction<P, T> | ((dispatch: DispatchInThunk) => Promise<void>)
) => MaybePromise<void>;
