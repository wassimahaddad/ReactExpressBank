import React from "react";
import "./Credit.css";

const Credit = () => {
  const handleCredit = () => {
    console.log("Credit");
  };
  return (
    <div>
      <label>Account ID</label>
      <input className="input-field" type="text" name="user_id" />
      <label>Credit Amount</label>
      <input className="input-field" type="text" name="Credit" />
      <div onClick={handleCredit} className="account-create">
        Add
      </div>
    </div>
  );
};

export default Credit;
