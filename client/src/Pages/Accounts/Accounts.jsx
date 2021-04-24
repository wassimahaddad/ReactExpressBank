import React, { useState } from "react";
import api from "../../API/api";
import "./Accounts.css";

const Accounts = () => {
  const [data, setData] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [userId, setUserId] = useState("");
  const [cash, setCash] = useState(0);
  const [credit, setCredit] = useState(0);
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
  const handleCreateForm = async () => {
    const response = await api.post("accounts", {
      user_id: userId,
      cash,
      credit,
    });
    alert(response.statusText);
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
        <input
          className="input-field"
          type="text"
          name="user_id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label>Cash</label>
        <input
          className="input-field"
          type="text"
          name="cash"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
        />
        <label>Credit</label>
        <input
          className="input-field"
          type="text"
          name="credit"
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
        />
        <div onClick={handleCreateForm} className="account-create">
          Create
        </div>
      </div>
    </div>
  );
};

export default Accounts;
