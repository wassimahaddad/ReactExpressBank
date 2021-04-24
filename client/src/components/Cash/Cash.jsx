import React, { useState } from "react";
import api from "../../API/api";
import "./Cash.css";

const Cash = () => {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const handleCash = async () => {
    try {
      const response = await api.patch("transactions", {
        operation: "addCash",
        to_acc: account,
        sum: amount,
      });
      alert(response.statusText);
    } catch (e) {
      alert("Operation failed, account may be locked");
    }
  };
  return (
    <div>
      <label>Account ID</label>
      <input
        className="input-field"
        type="text"
        name="user_id"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <label>Cash Amount</label>
      <input
        className="input-field"
        type="text"
        name="cash"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div onClick={handleCash} className="account-create">
        Add
      </div>
    </div>
  );
};

export default Cash;
