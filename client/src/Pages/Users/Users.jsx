import React, { useState } from "react";
import api from "../../API/api";
import "./Users.css";

const Users = () => {
  const [data, setData] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [cName, setCName] = useState("hide");

  const loadUsers = async () => {
    const response = await api.get("users");
    console.log(response);
    setData(response.data);
    setCName("hide");
  };
  const handleSubmit = async () => {
    const response = await api.get(`users/${inputVal}`);
    const arr = [];
    arr.push(response.data);
    setData(arr);
    setCName("hide");
  };

  const handleCreate = () => {
    setData("");
    setCName("form");
  };
  const handleCreateForm = () => {
    console.log("created");
  };

  return (
    <div className="users-main-page">
      <div className="search-section">
        <div onClick={handleCreate} className="create-account">
          Create user
        </div>
        <div>
          <div className="user-input">
            <input
              className="user-search"
              type="text"
              placeholder="Search by ID or email"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>

          <div onClick={handleSubmit} className="user-submit">
            Submit
          </div>
        </div>
        <div className="users-load" onClick={loadUsers}>
          Load all users
        </div>
      </div>

      <div className="users-container">
        {data
          ? data.map((item) => (
              <div className="user-wrapper" key={item._id}>
                <div>
                  <span>User ID: </span> {item._id}
                </div>
                <div>
                  <span>Name: </span>
                  {item.name}
                </div>
                <div>
                  <span>Email:</span> {item.email}
                </div>
                <div>
                  <span>Mobile Phone:</span> {item.email}
                </div>
              </div>
            ))
          : null}
      </div>
      <div className={cName}>
        <label>Name</label>
        <input className="input-field" type="text" name="name" />
        <label>Email Address</label>
        <input className="input-field" type="email" name="email" />
        <label>Mobile Phone</label>
        <input className="input-field" type="phone" name="" />
        <div onClick={handleCreateForm} className="user-create">
          Create
        </div>
      </div>
    </div>
  );
};

export default Users;
