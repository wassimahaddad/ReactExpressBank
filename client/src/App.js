import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Users from "./Pages/Users/Users";
import Accounts from "./Pages/Accounts/Accounts";
import Transactions from "./Pages/Transactions/Transactions";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/accounts" exact>
          <Accounts />
        </Route>
        <Route path="/accounts:id" exact>
          <Accounts />
        </Route>
        <Route path="/transactions" exact>
          <Transactions />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
