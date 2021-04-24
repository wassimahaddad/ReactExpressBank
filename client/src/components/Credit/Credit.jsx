import React, { useState } from "react";
import api from "../../API/api";
import "./Credit.css";

const Credit = () => {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const handleCredit = async () => {
    const response = await api.patch("transactions", {
      operation: "addCredit",
      to_acc: account,
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
        name="user_id"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <label>Credit Amount</label>
      <input
        className="input-field"
        type="text"
        name="Credit"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div onClick={handleCredit} className="account-create">
        Add
      </div>
    </div>
  );
};

export default Credit;
