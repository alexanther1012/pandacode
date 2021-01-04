import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './components/home' 

const App = () => {
  document.title = 'Panda Code';

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
