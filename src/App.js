import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/sass/app.sass";

// import Header from "./components/layout/Header";
// import Home from "./components/pages/Home";
import Building from "./components/pages/Building";
import NotFound from "./components/pages/NotFound";

const App = () => {
  document.title = "Panda Code";

  return (
    <Router>
      <div className="App">
        {/* <Header branding="PandAPP" /> */}
        <div className="container-xxl">
          <Switch>
            <Route exact path="/" component={Building}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
