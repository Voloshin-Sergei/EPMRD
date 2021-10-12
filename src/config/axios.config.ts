import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://reactjs-cdp.herokuapp.com',
});
