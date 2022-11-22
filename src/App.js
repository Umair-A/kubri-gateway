import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Makers from './pages/Makers';
import Takers from './pages/Takers';
import RiskAccounts from './pages/RiskAccounts';
import Welcome from './pages/Welcome';
import Hub from './pages/Hub';
import RiskUsers from './pages/RiskUsers';
import GiveupRule from './pages/GiveupRule';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/hub' component={Hub} />
          <Route path='/makers' component={Makers} />
          <Route path='/takers' component={Takers} />
          <Route path='/riskAccounts'  component={RiskAccounts}/>
          <Route path='/riskUsers'   component={RiskUsers}/>
          <Route path='/giveupRule'  component={GiveupRule} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
