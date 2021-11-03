import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/DashboardPage";
import Income from "./pages/IncomePage";
import Expense from "./pages/ExpensePage";
import NavComponent from "./components/Navbar";
function App() {
  return (
    <Router>
      <div>
        <NavComponent />

        <Switch>
          <Route path="/income">
            <Income />
          </Route>
          <Route path="/expense">
            <Expense />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
