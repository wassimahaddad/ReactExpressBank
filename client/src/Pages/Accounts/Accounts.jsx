import React, { useState } from "react";
import api from "../../API/api";
import "./Accounts.css";

const Accounts = () => {
  const [data, setData] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [cName, setCName] = useState("hide");

  const loadAccounts = async () => {
    const response = await api.get("accounts");
    console.log(response);
    setData(response.data);
    setCName("hide");
  };

  const handleSubmit = async () => {
    const response = await api.get(`accounts/${inputVal}`);
    const arr = [];
    arr.push(response.data);
    setData(arr);
    setCName("hide");
  };

  const handleCreate = () => {
    setData("");
    setCName("form");
  };

  return (
    <div className="accounts-main-page">
      <div className="search-section">
        <div onClick={handleCreate} className="create-account">
          Create account
        </div>
        <div>
          <div className="account-input">
            <input
              className="account-search"
              type="text"
              placeholder="Search by User ID"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>

          <div onClick={handleSubmit} className="account-submit">
            Submit
          </div>
        </div>
        <div className="accounts-load" onClick={loadAccounts}>
          Load all accounts
        </div>
      </div>

      <div className="accounts-container">
        {data
          ? data.map((item) => (
              <div className="account-wrapper" key={item._id}>
                <div>
                  <span>Account ID: </span> {item._id}
                </div>
                <div>
                  <span>User ID: </span>
                  {item.user_id}
                </div>
                <div>
                  <span>Cash: </span> {item.cash}
                </div>
                <div>
                  <span>Credit:</span> {item.credit}
                </div>
                <div>
                  <span>Active:</span> {item.isActive ? "Active" : "Locked"}
                </div>
              </div>
            ))
          : null}
      </div>
      <div className={cName}>
        <label>User ID</label>
        <input className="input-field" type="text" name="" id="" />
        <label>Cash</label>
        <input className="input-field" type="text" name="" id="" />
        <label>Credit</label>
        <input className="input-field" type="text" name="" id="" />
      </div>
    </div>
  );
};

export default Accounts;
