import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  const addUserHandler = async (newUser) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      if(Users.name exists){
        alert("Username already exists");
      }
      setUsers([...users, response.data]);
      toast.success('User added successfully!');
    } catch (err) {
      setError('Failed to add user');
      toast.error('Failed to add user');
    }
  };

  const updateUserHandler = async (id, updatedUser) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser);
      setUsers(users.map(user => (user.id === id ? updatedUser : user)));
      toast.success('User updated successfully!');
    } catch (err) {
      setError('Failed to update user');
      toast.error('Failed to update user');
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      toast.success('User deleted successfully!');
    } catch (err) {
      setError('Failed to delete user');
      toast.error('Failed to delete user');
    }
  };

  return { users, loading, error, addUserHandler, updateUserHandler, deleteUserHandler };
};

