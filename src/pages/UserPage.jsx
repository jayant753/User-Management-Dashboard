import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { useUsers } from '../hooks/useUsers';
import ErrorMessage from '../components/ErrorMessage';

const UsersPage = () => {
  const { users, loading, error, addUserHandler, updateUserHandler, deleteUserHandler } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSaveUser = (user) => {
    if (user.id) {
      updateUserHandler(user.id, user);
    } else {
      addUserHandler(user);
    }
    setSelectedUser(null);
  };

  const handleAddUser = () => {
    setSelectedUser({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      company: {
        name: '',
        catchPhrase: ''
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">User Management</h1>
      {error && <ErrorMessage message={error} />}
      
      {/* Add User Button */}
      <button onClick={handleAddUser} className="btn mb-4">Add User</button>

      {/* Form should appear here for both Add and Edit */}
      {selectedUser && (
        <UserForm
          user={selectedUser}
          onSave={handleSaveUser}
          onCancel={() => setSelectedUser(null)}
        />
      )}

      {/* User List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList
          users={users}
          onEdit={setSelectedUser}
          onDelete={deleteUserHandler}
        />
      )}
    </div>
  );
};

export default UsersPage;
