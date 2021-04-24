import React from "react";
import "./Status.css";

const Status = () => {
  const handleStatus = () => {
    console.log("Status");
  };
  return (
    <div>
      <label>Account ID</label>
      <input className="input-field" type="text" name="user_id" />
      <div className="status-actions">
        <div onClick={handleStatus} className="account-create">
          Activate
        </div>
        <div onClick={handleStatus} className="account-create">
          Lock
        </div>
      </div>
    </div>
  );
};

export default Status;
