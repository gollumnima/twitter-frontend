import axios from 'axios';
import { URL } from '@utils/constants';

const twitterAPI = axios.create({
  baseURL: URL,
});

twitterAPI.interceptors.request.use((req) => {
  const authToken = localStorage.getItem('twitter-login-token');
  const authHeader = authToken ? `Bearer ${authToken}` : '';

  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: authHeader,
    },
  };
});

export { twitterAPI };
