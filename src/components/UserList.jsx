import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
