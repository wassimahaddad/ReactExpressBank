import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Accounts">Accounts</Link>
      <Link to="/Users">Users</Link>
      <Link to="/Transactions">Transactions</Link>
    </div>
  );
};

export default Navbar;
