import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async () => {
  return await api.get('/users');
};

export const addUser = async (userData) => {
  return await api.post('/users', userData);
};

export const updateUser = async (id, userData) => {
  return await api.put(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  return await api.delete(`/users/${id}`);
};
