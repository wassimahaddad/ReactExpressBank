import React, { useState } from "react";
import Users from "../../Pages/Users/Users";
import Accounts from "../../Pages/Accounts/Accounts";
import axios from "axios";

const Actions = () => {
  const [usersData, setUsersData] = useState("");
  const [accountsData, setAccountsData] = useState("");

  const loadUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response);
    setUsersData(response.data);
  };
  const loadAccounts = async () => {
    const response = await axios.get("http://localhost:5000/api/accounts");
    console.log(response);
    setAccountsData(response.data);
  };

  return (
    <div className="Action-row">
      <button onClick={loadUsers}>Load All Users</button>
      <div>
        <Users data={usersData} />
      </div>
      <button onClick={loadAccounts}>Load All Accounts</button>
      <div>
        <Accounts data={accountsData} />
      </div>
    </div>
  );
};

export default Actions;
