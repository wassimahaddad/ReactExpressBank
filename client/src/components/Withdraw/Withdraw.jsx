import React from "react";
import "./Withdraw.css";

const Withdraw = () => {
  const handleWithdraw = () => {
    console.log("withdraw");
  };
  return (
    <div>
      <label>Account ID</label>
      <input className="input-field" type="text" name="user_id" />
      <label>Withdrawal Amount</label>
      <input className="input-field" type="text" name="cash" />
      <div onClick={handleWithdraw} className="account-create">
        Withdraw
      </div>
    </div>
  );
};

export default Withdraw;
