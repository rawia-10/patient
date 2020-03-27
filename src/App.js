import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import aide from './components/aide'
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import contact from './components/contact';
function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
       <Route exact   path='/' component={Home} />
       <Route path='/aide' component={aide} />
       <Route path='/contact' component={contact} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
