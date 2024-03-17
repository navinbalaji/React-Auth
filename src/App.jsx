// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
