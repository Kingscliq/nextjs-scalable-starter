import Axios from 'axios';
import { API_URL, API_URL2 } from '@/config';
import { useMemo } from 'react';
// import { user } from '@/features/Auth/Auth.store';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'App-Id': 'xH1pQ3lVXNT0wsUqGJ/s/vGCAKuy9uNR',
    'X-REQUEST-LOCK': 'I8uG2k0Fax31vG',
  },
  // withCredentials: process.env.NODE_ENV !== "development"
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
