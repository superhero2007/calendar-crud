import axios from 'axios';
import {get} from 'lodash';

const SERVER_API = 'http://localhost:3001/api';

export const ApiServer = axios.create({baseURL: SERVER_API});
const handleResponse = (res) => res.data;

const handleError = (error) =>
  Promise.reject(get(error, 'response.data.message'));

export const httpInterceptor = {
  setupInterceptors() {
    ApiServer.interceptors.response.use(handleResponse, handleError);
  },
};
