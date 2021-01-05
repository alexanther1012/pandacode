import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/sass/app.sass";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  document.title = "Panda Code";

  return (
    <Router>
      <div className="App">
        <Header branding="PandAPP" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
