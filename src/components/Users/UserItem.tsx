import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  const imageStyle = {
    background: `url(${user.image}) no-repeat center center / cover`,
  };

  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-sm-4 rounded-start" style={imageStyle}/>
        <div className="col-sm-8 ps-2">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text small">Role: {user.role}</p>
            <p className="card-text">Age: {user.age} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;