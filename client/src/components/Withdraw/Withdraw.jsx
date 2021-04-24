import React, { useState } from "react";
import api from "../../API/api";
import "./Withdraw.css";

const Withdraw = () => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const handleWithdraw = async () => {
    const response = await api.patch("transactions", {
      operation: "withdraw",
      from_acc: accountId,
      sum: amount,
    });
    alert(response.statusText);
  };
  return (
    <div>
      <label>Account ID</label>
      <input
        className="input-field"
        type="text"
        name="accountId"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
      />
      <label>Withdrawal Amount</label>
      <input
        className="input-field"
        type="text"
        name="cash"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div onClick={handleWithdraw} className="account-create">
        Withdraw
      </div>
    </div>
  );
};

export default Withdraw;
