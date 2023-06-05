import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:6120/api/',
});
