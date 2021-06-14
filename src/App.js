import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/details' component={Details} />
      </Switch>
    </Router>
    
  );
}

export default App;
