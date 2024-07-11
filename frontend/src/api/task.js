import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';

export const getTasks = async (priority) => {
  const response = await axios.get(API_URL, {
    params: {
      priority
    }
  });
  return response.data;
};

export const getTaskById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
