const UserForm = () => {
  return (
    <form>
      <h4>Add new User</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          id="Email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Role">Role</label>
        <select
          required
          name="Role"
          id="Role"
          className="form-select"
        ></select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="check">Is Active?</label>
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
        />
      </div>
    </form>
  );
};

export default UserForm;