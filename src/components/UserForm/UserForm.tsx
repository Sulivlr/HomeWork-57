import React, {useState} from 'react';
import {User, UserForm} from '../../types';
import {Roles} from '../../constant';


interface Props {
  onSubmit: (user: User) => void;
}
const UserForm: React.FC<Props> = ({onSubmit}) => {

  const [userMutation, setUserMutation] = useState<UserForm>({
    name: '',
    Email: '',
    age: '',
    role: '',
    image: '',
    isActive: false,
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setUserMutation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const changeIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMutation(prevState => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
      onSubmit({
        id: Math.random().toString(),
        ...userMutation,
        age: parseFloat(userMutation.age),
      })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new User</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={changeUser}
          value={userMutation.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          id="Email"
          className="form-control"
          onChange={changeUser}
          value={userMutation.Email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Role">Role</label>
        <select
          required
          name="role"
          id="role"
          className="form-select"
          value={userMutation.role}
          onChange={changeUser}
        >
          <option value="">Select a role</option>
          {Roles.map(role => (
            <option key={role.value} value={role.value}>{role.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="name">Image</label>
        <input
          required
          type="text"
          name="image"
          id="image"
          className="form-control"
          onChange={changeUser}
          value={userMutation.image}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Age</label>
        <input
          min={17}
          required
          type="text"
          name="age"
          id="age"
          className="form-control"
          onChange={changeUser}
          value={userMutation.age}
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="isActive">Is Active?</label>
        <input
          required
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
          onChange={changeIsActive}
          checked={userMutation.isActive}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">Add</button>
    </form>
  );
};

export default UserForm;