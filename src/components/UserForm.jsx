import { useState, useEffect } from 'react';

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        website: user.website || '',
        address: {
          street: user.address?.street || '',
          suite: user.address?.suite || '',
          city: user.address?.city || '',
          zipcode: user.address?.zipcode || ''
        },
        company: {
          name: user.company?.name || '',
          catchPhrase: user.company?.catchPhrase || ''
        }
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input" />
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="input" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" />
      <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="input" />

      <div className="grid grid-cols-2 gap-4">
        <input name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Street" className="input" />
        <input name="address.suite" value={formData.address.suite} onChange={handleChange} placeholder="Suite" className="input" />
        <input name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" className="input" />
        <input name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="input" />
      </div>

      <input name="company.name" value={formData.company.name} onChange={handleChange} placeholder="Company Name" className="input" />
      <input name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} placeholder="Catchphrase" className="input" />

      <div className="flex space-x-2">
        <button type="submit" className="btn">Save</button>
        <button type="button" onClick={onCancel} className="btn">Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;

