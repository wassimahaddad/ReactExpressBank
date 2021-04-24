import React, { useState } from "react";
import "./Transactions.css";
import Withdraw from "../../components/Withdraw/Withdraw";
import Transfer from "../../components/Transfer/Transfer";
import Cash from "../../components/Cash/Cash";
import Credit from "../../components/Credit/Credit";
import Status from "../../components/Status/Status";

const Transactions = () => {
  const [action, setAction] = useState("Withdraw");
  const handleTransactions = (e) => {
    setAction(e.target.value);
    console.log(action);
  };
  return (
    <div className="transactions-container">
      <div className="transactions-bar">
        <div className="transactions-title">Choose sction</div>
        <div>
          <select
            onChange={handleTransactions}
            className="transactions-options"
          >
            <option>Withdraw</option>
            <option>Transfer</option>
            <option>Add Cash</option>
            <option>Add Credit</option>
            <option>Change status</option>
          </select>
        </div>
      </div>
      <div className="transactrions-component">
        <>{action === "Withdraw" ? <Withdraw /> : null}</>
        <>{action === "Transfer" ? <Transfer /> : null}</>
        <>{action === "Add Cash" ? <Cash /> : null}</>
        <>{action === "Add Credit" ? <Credit /> : null}</>
        <>{action === "Change status" ? <Status /> : null}</>
      </div>
    </div>
  );
};

export default Transactions;
