import React, { useState } from "react";
import api from "../../API/api";
import "./Status.css";

const Status = () => {
  const [AccId, setAccId] = useState("");
  const handleStatus = async (e) => {
    try {
      const response = await api.patch("transactions", {
        operation: "status",
        from_acc: AccId,
        isActive: e.target.id === "Activate" ? true : false,
      });
      alert(response.statusText);
    } catch (e) {
      alert("Operation failed");
    }
  };
  return (
    <div>
      <label>Account ID</label>
      <input
        className="input-field"
        type="text"
        name="AccId"
        value={AccId}
        onChange={(e) => setAccId(e.target.value)}
      />
      <div className="status-actions">
        <div onClick={handleStatus} className="account-create" id="Activate">
          Activate
        </div>
        <div onClick={handleStatus} className="account-create" id="Lock">
          Lock
        </div>
      </div>
    </div>
  );
};

export default Status;
