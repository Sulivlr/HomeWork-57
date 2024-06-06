const UserItem = () => {
  const imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  const imageStyle = {
    background: `url(${imageUrl} no-repeat center center / cover`,
  };

  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-sm-4 rounded-start" style={imageStyle}>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text small">Email</p>
              <p className="card-text">Role</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;