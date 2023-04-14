import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://yts.mx/api/v2',
});
