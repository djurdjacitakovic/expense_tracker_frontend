import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import Dashboard from './pages/dashboard';
import Income from './pages/income';
import Expense from './pages/expense';
import NavComponent from './components/navbar'
function App() {
  return (
    <Router>
      <div>
        <NavComponent/>
        
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
