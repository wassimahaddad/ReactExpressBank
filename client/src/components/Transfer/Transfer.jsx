import React from "react";
import "./Transfer.css";

const Transfer = () => {
  const handleTransfer = () => {
    console.log("Transfer");
  };
  return (
    <div>
      <label>From Account ID</label>
      <input className="input-field" type="text" name="user_id" />
      <label>To Account ID</label>
      <input className="input-field" type="text" name="user_id" />
      <label>Transfer Amount</label>
      <input className="input-field" type="text" name="cash" />
      <div onClick={handleTransfer} className="account-create">
        Transfer
      </div>
    </div>
  );
};

export default Transfer;
