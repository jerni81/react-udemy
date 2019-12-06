import React from "react";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>this is the second paragraph</p>
    </div>
  );
};

export default UserOutput;
