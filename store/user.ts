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

interface IFollows {
  follower_id: number,
  followee_id: number
}

type UserStateType = {
  token: string | null;
  userInfo: IUserInfo | null
  foundUser: IUserInfo | null;
  followers: [] | null,
  followings: [] | null
  // followers: Pick<IUserInfo, 'created_at' | 'deleted_at'> & IFollows | null
  // followings: Pick<IUserInfo, 'created_at' | 'deleted_at'> & IFollows | null
};

const initialState: UserStateType = {
  token: null,
  userInfo: null,
  foundUser: null,
  followers: null,
  followings: null,
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
    setFollowers: (state, action: PayloadAction<Pick<IUserInfo, 'created_at' | 'deleted_at'> & IFollows>) => {
      // eslint-disable-next-line no-param-reassign
      state.followers = action.payload;
    },
    setFollowings: (state, action: PayloadAction<Pick<IUserInfo, 'created_at' | 'deleted_at'> & IFollows>) => {
      // eslint-disable-next-line no-param-reassign
      state.followings = action.payload;
    },
  },
});

export default userSlice.reducer;

const {
  setUserInfo, setFoundUser, setFollowers, setFollowings,
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

export const follow = (id: number) => (async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.post(`/api/users/${id}/followers`);
    await dispatch(setFollowers(data.rows));
  } catch (err) {
    console.error(err);
  }
});

export const unfollow = (id: number) => (async (dispatch: (param: object | null) => void) => {
  try {
    await dispatch(twitterAPI.delete(`/api/users/${id}/followers`));
  } catch (err) {
    console.error(err);
  }
});

export const getFollowers = (id: number) => (async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.get(`/api/users/${id}/followers`);
    await dispatch(setFollowers(data.rows));
  } catch (err) {
    console.error(err);
  }
});

export const getFollowees = (id: number) => (async (dispatch: (param: object | null) => void) => {
  try {
    const { data } = await twitterAPI.get(`/api/users/${id}/followings`);
    await dispatch(setFollowings(data.rows));
  } catch (err) {
    console.error(err);
  }
});

// export const follow = (id: number) => (async (dispatch: (param: object | null) => void) => {
//   try {
//     await dispatch(setFollowers({ rows: [], count: 0 }));
//     const { data } = await twitterAPI.get(`/api/users/${id}/followers`);
//     const { rows, count } = data;
//     await dispatch(setFollowers({ rows, count }));
//   } catch (err) {
//     console.error(err);
//   }
// });
