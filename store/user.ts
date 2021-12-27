import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { twitterAPI } from '@utils/axios.wrapper';
import { authToken } from '@utils/localStorage.wrapper';

interface IUserInfo {
  id: number;
  created_at: string;
  deleted_at: string | null;
  username: string;
  description: string;
  image_url: string;
  name: string;
  updated_at: string;
}

type UserStateType = {
  token: string | null;
  userInfo: IUserInfo | null
  foundUser: IUserInfo | null;
};

const initialState: UserStateType = {
  token: null,
  userInfo: null,
  foundUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserInfo | null>) => {
      // eslint-disable-next-line no-param-reassign
      state.userInfo = action.payload;
    },
    setFoundUser: (state, action: PayloadAction<IUserInfo | null>) => {
      // eslint-disable-next-line no-param-reassign
      state.foundUser = action.payload;
    },
  },
});

export default userSlice.reducer;

const {
  setUserInfo, setFoundUser,
} = userSlice.actions;

// eslint-disable-next-line max-len
export const signUp = <T>(username: T, name: T, password: T, description: T) => {
  try {
    twitterAPI.post('/api/users', {
      username,
      name,
      password,
      description,
    });
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const login = <T>(
  username: T,
  password: T,
  callback?: (args: object) => void,
) => async (dispatch: (param: object | null) => void) => {
    try {
      const { data } = await twitterAPI.post('/api/users/login', {
        username,
        password,
      });
      const { user, token } = data;
      dispatch(setUserInfo(user));
      authToken.set(token);
      if (callback) return callback(user);
      return null;
    } catch (err) {
      dispatch(setUserInfo(null));
      authToken.remove();
      console.error(err);
      return null;
    }
  };

export const logout = () => (dispatch: (param: object | null) => void) => {
  authToken.remove();
  dispatch(setUserInfo(null));
};

export const getSelf = () => (dispatch: (param: object | null) => void) => {
  try {
    twitterAPI.get('/api/users/self').then(({ data }) => {
      dispatch(setUserInfo(data));
      console.log('로그인한 사용자의 username 👉', data.username);
    });
  } catch (err) {
    console.error(err);
  }
};

export const findUser = (username: string) => (async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.get(`/api/users/username/${username}`);
    dispatch(setFoundUser(data));
  } catch (err) {
    console.error(err);
  }
});
