import React, { useState } from "react";
import api from "../../API/api";
import "./Transfer.css";

const Transfer = () => {
  const [fromAcc, setFromAcc] = useState("");
  const [toAcc, setToAcc] = useState("");
  const [amount, setAmount] = useState("");
  const handleTransfer = async () => {
    try {
      const response = await api.patch("transactions", {
        operation: "transfer",
        from_acc: fromAcc,
        to_acc: toAcc,
        sum: amount,
      });
      alert(response.statusText);
    } catch (e) {
      alert(
        "Operation failed, one or both of the accounts may be locked or the source account may not have enough funds to complete the operation"
      );
    }
  };
  return (
    <div>
      <label>From Account ID</label>
      <input
        className="input-field"
        type="text"
        name="user_id"
        value={fromAcc}
        onChange={(e) => setFromAcc(e.target.value)}
      />
      <label>To Account ID</label>
      <input
        className="input-field"
        type="text"
        name="user_id"
        value={toAcc}
        onChange={(e) => setToAcc(e.target.value)}
      />
      <label>Transfer Amount</label>
      <input
        className="input-field"
        type="number"
        name="cash"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div onClick={handleTransfer} className="account-create">
        Transfer
      </div>
    </div>
  );
};

export default Transfer;
