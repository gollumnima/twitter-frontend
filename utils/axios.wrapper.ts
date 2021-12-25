import axios from 'axios';
import { URL } from '@utils/constants';
import { authToken } from '@utils/localStorage.wrapper';

const twitterAPI = axios.create({
  baseURL: URL,
});

twitterAPI.interceptors.request.use((req) => {
  const token = authToken.get();
  const authHeader = token ? `Bearer ${token}` : '';

  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: authHeader,
    },
  };
});

export { twitterAPI };
