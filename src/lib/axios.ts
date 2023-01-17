import { API_URL, API_URL2 } from '@/constants';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'App-Id': 'xH1pQ3lVXNT0wsUqGJ/s/vGCAKuy9uNR',
    'X-REQUEST-LOCK': 'I8uG2k0Fax31vG',
  },
});

export const axios2 = Axios.create({
  baseURL: API_URL2,
});

export const supportAxios = Axios.create({
  baseURL: API_URL2,
});

export const setAuthHeader = (token: string) => {
  return axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
