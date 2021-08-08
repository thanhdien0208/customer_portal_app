
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import SharedDirs from './pages/SharedDirs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/products' exact component={Products} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/shareddirs' exact component={SharedDirs} />
          <Route path='/account' exact component={Account} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
