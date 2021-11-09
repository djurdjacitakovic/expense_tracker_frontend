import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import DashboardPage from "./pages/DashboardPage";
import IncomePage from "./pages/IncomePage";
import ExpenseGroupPage from "./pages/ExpenseGroupPage";
import IncomeGroupPage from "./pages/IncomeGroupPage";
import ExpensePage from "./pages/ExpensePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/income">
            <IncomePage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
          <Route path="/expense-groups">
            <ExpenseGroupPage />
          </Route>
          <Route path="/income-groups">
            <IncomeGroupPage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
