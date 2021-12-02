import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { twitterAPI } from '@utils/axios.wrapper';
import { authToken } from '@utils/localStorage.wrapper';

type UserStateType = {
  token: string | null;
  userInfo: {
    id: number;
    created_at: string;
    deleted_at: string | null;
    username: string;
    image_url: string;
    name: string;
    updated_at: string;
  }
};
const initialState: UserStateType = {
  token: null,
  userInfo: {
    id: 0,
    created_at: '',
    deleted_at: '',
    username: '',
    image_url: '',
    name: '',
    updated_at: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction) => {
      state.userInfo = action.payload;
    },
  },
});

export default userSlice.reducer;

const {
  setUserInfo,
} = userSlice.actions;

// eslint-disable-next-line max-len
export const signUp = <T>(username: T, name: T, password: T) => async (dispatch: (fnc: object) => void) => {
  try {
    await twitterAPI.post('/api/users', {
      username,
      name,
      password,
    });
  } catch (err) {
    console.error((err as Error).message);
  }
};

// eslint-disable-next-line max-len
export const login = <T>(username: T, password: T, callback?: (args: object) => void) => async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.post('/api/users/login', {
      username,
      password,
    });
    const { user, token } = data;
    dispatch(setUserInfo(user));
    authToken.set(token);
    if (callback) return callback(user);
  } catch (err) {
    dispatch(setUserInfo(null));
    authToken.remove();
    console.error(err);
  }
};

export const getSelf = () => (dispatch: (param: object | null) => void) => {
  twitterAPI.get('/api/users/self').then(({ data }) => {
    dispatch(setUserInfo(data));
    console.log('로그인한 사용자의 username 👉', data.username);
  });
};

export const logout = () => (dispatch: (param: object | null) => void) => {
  authToken.remove();
  dispatch(setUserInfo(null));
};
