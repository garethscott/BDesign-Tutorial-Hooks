import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NaviBar from './components/NaviBar'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
