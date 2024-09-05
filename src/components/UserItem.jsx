const UserItem = ({ user, onEdit, onDelete }) => {
    return (
      <div className="bg-white p-4 shadow rounded flex justify-between items-center">
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(user)} className="text-blue-500">Edit</button>
          <button onClick={() => onDelete(user.id)} className="text-red-500">Delete</button>
        </div>
      </div>
    );
  };
  
  export default UserItem;
  
  