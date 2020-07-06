import React from "react";
import { Link } from "react-router-dom";
import "./user-item.css";

const UserItem = (props) => {
  const { user } = props;
  const errorIMG =
    "https://roundhouse-assets.s3.amazonaws.com/assets/Image/15214-fitandcrop-1200x681.jpg";
  return (
    <>
      <div className="col s12 m4 spacing">
        <div className="user-item card">
          <div className="card-image">
            <Link to={`/people/${user.id}`}>
              {" "}
              {!user.avatarUrl ? (
                <img src={errorIMG} alt="img" />
              ) : (
                <img src={user.about} alt="img" />
              )}{" "}
            </Link>
            <span className="card-title">{user.getFullName()}</span>
          </div>
          <div className="card-content">
            <p>
              API is broken and because of that error, I'm using pictures from
              other object.
            </p>
            <p>{user.createdAt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
