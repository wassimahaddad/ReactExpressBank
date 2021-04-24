import React from "react";
import "./Cash.css";

const Cash = () => {
  const handleCash = () => {
    console.log("Cash");
  };
  return (
    <div>
      <label>Account ID</label>
      <input className="input-field" type="text" name="user_id" />
      <label>Cash Amount</label>
      <input className="input-field" type="text" name="cash" />
      <div onClick={handleCash} className="account-create">
        Add
      </div>
    </div>
  );
};

export default Cash;
